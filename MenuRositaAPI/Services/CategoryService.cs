using MenuRositaAPI.Models;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Models.Dtos;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly RositaMenuDBContext _context;

        public CategoryService(RositaMenuDBContext context)
        {
            _context = context;
        }

        public async Task<Category> CreateCategoryAsync(CategoryDto categoryDto, int sectionId)
        {
            // Buscar la sección por ID
            var section = await _context.Sections.FindAsync(sectionId);

            if (section == null)
            {
                throw new Exception("La sección no existe.");
            }

            // Convertir CategoryDto a Category
            var category = new Category
            {
                Name = categoryDto.Name,
                SectionId = sectionId,  // Relacionar con la sección
            };

            // Agregar la nueva categoría a la base de datos
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            // Buscar la categoría por su ID
            var category = await _context.Categories
                .Include(c => c.Section) // Si necesitas incluir la relación con Section
                .FirstOrDefaultAsync(c => c.Id == id);

            if (category == null)
            {
                throw new Exception("Categoría no encontrada.");
            }

            return category;
        }

    }
}
