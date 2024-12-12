using MenuRositaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using WebApplication1.Data.Interfaces;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Controllers
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
        public IActionResult Add([FromBody] UserForAddRequest body)
        {
            return Ok(_userService.AddUser(body));
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
