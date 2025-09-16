using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using LoqiAI.Backend.Data;
using LoqiAI.Backend.Models;

namespace LoqiAI.Backend.GraphQL
{
    public class Query
    {
        [Authorize]
        public User Me([Service] AppDbContext context, ClaimsPrincipal claimsPrincipal)
        {
            var userId = int.Parse(claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier) ?? throw new Exception("User not found"));
            return context.Users.Find(userId) ?? throw new Exception("User not found");
        }
    }
}
