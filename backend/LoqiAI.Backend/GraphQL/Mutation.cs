using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using LoqiAI.Backend.Data;
using LoqiAI.Backend.Models;

namespace LoqiAI.Backend.GraphQL
{
    public class Mutation
    {
        public async Task<string> Register([Service] AppDbContext context, [Service] IPasswordHasher<User> hasher, string email, string username, string password)
        {
            if (context.Users.Any(u => u.Email == email || u.Username == username))
                throw new Exception("User already exists");

            var user = new User { Email = email, Username = username };
            user.PasswordHash = hasher.HashPassword(user, password);

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return "Registration successful";
        }

        public async Task<string> Login([Service] AppDbContext context, [Service] IPasswordHasher<User> hasher, string email, string password)
        {
            var user = context.Users.FirstOrDefault(u => u.Email == email) ?? throw new Exception("Invalid credentials");
            if (hasher.VerifyHashedPassword(user, user.PasswordHash, password) != PasswordVerificationResult.Success)
                throw new Exception("Invalid credentials");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            };

            var jwtKey = Encoding.ASCII.GetBytes("your-secret-key-at-least-32-chars-long");
            var creds = new SigningCredentials(new SymmetricSecurityKey(jwtKey), SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
