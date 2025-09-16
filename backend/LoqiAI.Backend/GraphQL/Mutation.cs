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

namespace LoqiAI.Backend.GraphQL
{
    public class Mutation
    {
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

            // 🔑 Hardcoded JWT key
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
            var requestBody = new
            {
                contents = new[]
                {
                    new { parts = new[] { new { text = prompt } } }
                }
            };

            var json = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            // 🔑 Hardcoded Gemini API key
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
                return $"Gemini API Error ({response.StatusCode}): {errorText}";
            }

            var responseBody = await response.Content.ReadAsStringAsync();
            using var document = JsonDocument.Parse(responseBody);

            var generatedText = document.RootElement
                .GetProperty("candidates")[0]
                .GetProperty("content")
                .GetProperty("parts")[0]
                .GetProperty("text")
                .GetString();

            var codeMatch = System.Text.RegularExpressions.Regex.Match(
                generatedText ?? "",
                @"```[\w\s]*\n([\s\S]*?)\n```"
            );

            return codeMatch.Success ? codeMatch.Groups[1].Value : generatedText ?? "";
        }
    }
}
