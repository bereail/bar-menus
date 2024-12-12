using Application.Dtos.Credentials;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MenuRositaAPI.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ICustomAuthenticationService authenticationService;


        public AuthenticationController(IConfiguration configuration)
        {
            _config = configuration;
            this.authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] LoginRequestDTO loginRequest)
        {
            string? token = await authenticationService.Authenticate(loginRequest);

            return Ok(token);
        }

        [HttpPost("recovery")]
        public async Task<IActionResult> RequestPasswordRecovery([FromBody] PasswordRecoveryRequestDto passwordRecoveryRequest)
        {
            string email = passwordRecoveryRequest.Email;

            await authenticationService.HandlePasswordRecoveryRequest(email);

            return NoContent();
        }
    }
}