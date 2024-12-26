using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models.Dtos.Credentials;
using WebApplication1.Services;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuService _menuService;

        // Inyección de dependencias para el servicio
        public MenuController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        // Acción para obtener todo el menú (secciones, categorías y productos)
        [HttpGet("GetMenu")]
        public async Task<ActionResult<List<SectionAllDto>>> GetMenu()
        {
            try
            {
                var menu = await _menuService.GetMenuAsync();
                return Ok(menu);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // Para manejar excepciones
            }
        }
    }
}