using Application.Dtos;
using Domain.Interfaces;
using MenuRositaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace MenuRositaAPI.Controllers
{
    [Route("api/users")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userService;

        public UserController(IUserRepository userService)
        {
            _userService = userService;
        }


        // Crear usuario sin requerir autenticación
        [HttpPost("createUser")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateUserAsync([FromBody] CreateUserDto createUserDto)
        {
            if (createUserDto == null)
            {
                return BadRequest("Invalid user data.");
            }

            try
            {
                // Convertir la contraseña de string a byte[]
                var passwordBytes = HashPassword(createUserDto.Pass);

                var user = new User
                {
                    Username = createUserDto.Username,
                    Email = createUserDto.Email,
                    Pass = passwordBytes,
                    IsAdmin = createUserDto.IsAdmin// Esto puede ser nulo
                };

                var createdUser = await _userService.CreateUserAsync(user);
                return CreatedAtAction(nameof(GetUserByIdAsync), new { id = createdUser.Id }, createdUser);
            }
            catch (Exception ex)
            {
                // Manejo del error, puedes registrar el error si es necesario
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }



        // Definición de la función HashPassword
        private byte[] HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                return sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserByIdAsync(Guid id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}