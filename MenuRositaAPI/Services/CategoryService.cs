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

        public async Task<Category> EditCategoryAsync(int id, CategoryDto categoryDto)
        {
            var category = await _context.Categories.FindAsync(id); // Corregir esta línea

            if (category == null)
            {
                throw new ArgumentException("Categoría con el ID especificado no encontrada.");
            }

            // Actualizar propiedades desde CategoryDto
            category.Name = categoryDto.Name;
            category.Description = categoryDto.Description;

            // Actualizar la asociación con la sección (si es necesario)
            category.SectionId = categoryDto.SectionId;

            _context.Categories.Update(category); // Usar el método de actualización del contexto
            await _context.SaveChangesAsync(); // Guardar los cambios

            return category;
        }

        public async Task DeleteCategoryAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
            {
                throw new ArgumentException("Categoría con el ID especificado no encontrada.");
            }

            // Verificar si existen productos asociados antes de la eliminación
            var hasProducts = await _productRepository.HasProductsAsync(id);

            if (hasProducts)
            {
                throw new InvalidOperationException("No se puede eliminar una categoría con productos asociados.");
            }

            _context.Categories.Remove(category); // Eliminar la categoría
            await _context.SaveChangesAsync(); // Guardar los cambios
        }

    }
}
