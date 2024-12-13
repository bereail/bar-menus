using MenuRositaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models.Dtos;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CategoryDto category, [FromQuery] int sectionId)
        {
            try
            {
                var createdCategory = await _categoryService.CreateCategoryAsync(category, sectionId);
                // Retornar un DTO de respuesta si es necesario
                var categoryResponse = new CategoryResponseDto
                {
                    Id = createdCategory.Id,
                    Name = createdCategory.Name,
                    SectionId = createdCategory.SectionId
                };

                return Ok(categoryResponse); // Retornar el DTO simplificado
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al crear categoría: {ex.Message}");
            }
        }
    }
}
