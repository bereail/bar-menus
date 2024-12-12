using MenuRositaAPI.Models;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Data.Interfaces
{
    public interface IUserRepository
    {
        //autenticacion
        User Authenticate(string username, string pass);

        //traer user por id
        Task<User?> GetUserByIdAsync(Guid id);

        //funcion para crear user
        public User AddUser(UserForAddRequest body);
    }
}