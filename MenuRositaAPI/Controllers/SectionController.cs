using MenuRositaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models.Dtos;
using WebApplication1.Services;
using WebApplication1.Services.Interfaces;
using System.Threading.Tasks;
using WebApplication1.Models.Dtos.Credentials;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectionController : ControllerBase
    {
        private readonly ISectionService _sectionService;

        public SectionController(ISectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [HttpPost]
        public async Task<ActionResult<Section>> CreateSectionAsync(SectionDto section)
        {
            // Crear una nueva instancia de Section con los datos proporcionados
            var newSection = new Section
            {
                Name = section.Name,
            };

            // Llamar al servicio para crear la sección
            var createdSection = await _sectionService.CreateSectionAsync(newSection);

            // Retornar la respuesta con el objeto creado y la ubicación
            return CreatedAtAction(nameof(GetSectionByIdAsyn), new { id = createdSection.Id }, createdSection);
        }

        // Este método se asume que existe en tu controlador para que CreatedAtAction funcione
        [HttpGet("{id}")]
        public async Task<ActionResult<Section>> GetSectionByIdAsyn(int id)
        {
            var section = await _sectionService.GetSectionByIdAsync(id);
            if (section == null)
            {
                return NotFound();
            }
            return Ok(section);
        }
    }
}
