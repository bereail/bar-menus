using MenuRositaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication1.Models;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services
{
    public class UserService : IUserService
     {
            private readonly RositaMenuDBContext _context;

            public UserService(RositaMenuDBContext context)
            {
                _context = context;
            }

        public async Task<User> AuthenticateAsync(string username, string password)
        {
            Console.WriteLine($"Authenticating user: {username}");

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (user == null || user.Pass != password)
            {
                return null;
            }

            return user;
        }

        public string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySuperSecureKey1234567890AbcDef"));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim("IsAdmin", user.IsAdmin.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = "https://localhost:7191",
                Audience = "GenericAPIonline",
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
