using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Dtos
{
    public class CreateUserDto
    {

        public string Username { get; set; }

        public string Email { get; set; }

        public string Pass { get; set; }

        public bool IsAdmin { get; set; }
    }
}
