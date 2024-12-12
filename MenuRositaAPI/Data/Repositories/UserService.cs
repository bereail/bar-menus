using Microsoft.AspNetCore.Identity;
using WebApplication1.Data.Interfaces;
using WebApplication1.Models;
using System.Text;
using Microsoft.EntityFrameworkCore;
using MenuRositaAPI.Models;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Data.Repositories
{
    public class UserService : IUserRepository
    {
        private readonly RositaMenuDBContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;

        public UserService(RositaMenuDBContext context)
        {
            _context = context;
        }

        public User AddUser(UserForAddRequest body)
        {
            // Crear un nuevo objeto User
            var user = new User
            {
                Username = body.Username,
                Email = body.Email,
                Pass = body.Pass,
            };


            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public User Authenticate(string username, string pass)
        {
            var user = _context.Users.SingleOrDefault(x => x.Username == username && x.Pass== pass);

            return user;
        }

        public Task<User?> GetUserByIdAsync(Guid id) // Use Guid for ID comparison
        {
            return _context.Users.FirstOrDefaultAsync(x => x.Id.Equals(id)); // Use Equals for Guid comparison
        }
    }
}