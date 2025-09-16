using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using LoqiAI.Backend.Data;
using LoqiAI.Backend.GraphQL;
using LoqiAI.Backend.Models; // make sure Models/User.cs exists

var builder = WebApplication.CreateBuilder(args);

// Add EF Core with Neon PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Authorization (must be before GraphQL)
builder.Services.AddAuthorization();

// Add GraphQL with HotChocolate
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>();

// Configure JWT Authentication
var jwtKey = Encoding.ASCII.GetBytes("89a8aac12af7462998e106384726991b"); // 🔑 replace with a strong secret
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(jwtKey),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

// Password Hasher for User entity
builder.Services.AddSingleton<
    Microsoft.AspNetCore.Identity.IPasswordHasher<User>,
    Microsoft.AspNetCore.Identity.PasswordHasher<User>
>();

var app = builder.Build();

// Middleware
app.UseAuthentication();
app.UseAuthorization();

// Expose GraphQL endpoint at /graphql
app.MapGraphQL();

app.Run();
