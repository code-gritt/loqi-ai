using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using LoqiAI.Backend.Data;
using LoqiAI.Backend.Models;
using System.Net.Http;
using System.Text.Json;
using HotChocolate.Authorization;
using Microsoft.Extensions.Logging; // Added for logging

namespace LoqiAI.Backend.GraphQL
{
    public class Mutation
    {
        private readonly ILogger<Mutation> _logger; // Added for logging

        public Mutation(ILogger<Mutation> logger)
        {
            _logger = logger;
        }

        // --- Register ---
        public async Task<string> Register(
            [Service] AppDbContext context,
            [Service] IPasswordHasher<User> hasher,
            string email,
            string username,
            string password)
        {
            if (context.Users.Any(u => u.Email == email || u.Username == username))
                throw new Exception("User already exists");

            var user = new User
            {
                Email = email,
                Username = username,
                PasswordHash = hasher.HashPassword(null!, password)
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return "Registration successful";
        }

        // --- Login ---
        public async Task<string> Login(
            [Service] AppDbContext context,
            [Service] IPasswordHasher<User> hasher,
            string email,
            string password)
        {
            var user = context.Users.FirstOrDefault(u => u.Email == email)
                ?? throw new Exception("Invalid credentials");

            var result = hasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (result != PasswordVerificationResult.Success)
                throw new Exception("Invalid credentials");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            };

            var jwtKey = Encoding.ASCII.GetBytes("89a8aac12af7462998e106384726991b");
            var creds = new SigningCredentials(new SymmetricSecurityKey(jwtKey), SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // --- Generate Code (Gemini AI) ---
        [Authorize]
        public async Task<string> GenerateCode(
            [Service] HttpClient httpClient,
            string prompt)
        {
            try
            {
                _logger.LogInformation("Generating code for prompt: {Prompt}", prompt);

                var requestBody = new
                {
                    contents = new[]
                    {
                        new { parts = new[] { new { text = prompt } } }
                    }
                };

                var json = JsonSerializer.Serialize(requestBody);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var apiKey = "AIzaSyCrFOJs7a9eRY4kc2U6efgERkKpLRH_pqs";
                var request = new HttpRequestMessage(
                    HttpMethod.Post,
                    $"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={apiKey}"
                )
                {
                    Content = content
                };

                var response = await httpClient.SendAsync(request);

                if (!response.IsSuccessStatusCode)
                {
                    var errorText = await response.Content.ReadAsStringAsync();
                    _logger.LogError("Gemini API failed with status {StatusCode}: {ErrorText}", response.StatusCode, errorText);
                    throw new Exception($"Gemini API error ({response.StatusCode}): {errorText}");
                }

                var responseBody = await response.Content.ReadAsStringAsync();
                using var document = JsonDocument.Parse(responseBody);

                // Safely navigate JSON structure
                var root = document.RootElement;
                if (!root.TryGetProperty("candidates", out var candidates) || candidates.GetArrayLength() == 0)
                {
                    _logger.LogError("No candidates found in Gemini response: {ResponseBody}", responseBody);
                    throw new Exception("No valid response from Gemini API");
                }

                if (!candidates[0].TryGetProperty("content", out var contentElement) ||
                    !contentElement.TryGetProperty("parts", out var parts) ||
                    parts.GetArrayLength() == 0 ||
                    !parts[0].TryGetProperty("text", out var text))
                {
                    _logger.LogError("Invalid Gemini response structure: {ResponseBody}", responseBody);
                    throw new Exception("Invalid response structure from Gemini API");
                }

                var generatedText = text.GetString() ?? "";
                _logger.LogInformation("Generated text: {GeneratedText}", generatedText);

                // Extract code block if present
                var codeMatch = System.Text.RegularExpressions.Regex.Match(
                    generatedText,
                    @"```[\w\s]*\n([\s\S]*?)\n```"
                );

                return codeMatch.Success ? codeMatch.Groups[1].Value : generatedText;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in GenerateCode: {Message}", ex.Message);
                throw new Exception($"Code generation failed: {ex.Message}");
            }
        }
    }
}