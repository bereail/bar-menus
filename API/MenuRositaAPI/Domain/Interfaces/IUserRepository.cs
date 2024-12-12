using MenuRositaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUserRepository
    {
        //autenticacion
        User Authenticate(string username, string password);

        //traer user por id
        Task<User?> GetUserByIdAsync(Guid id);

        //funcion para crear user
        Task<User> CreateUserAsync(User user);
    }
}
