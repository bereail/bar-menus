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

        // Crear una nueva categoría asociada a una sección
        public async Task<Category> CreateCategoryAsync(CategoryDto categoryDto, int sectionId)
        {
            var section = await _context.Sections.FindAsync(sectionId);
            if (section == null)
            {
                throw new KeyNotFoundException("La sección especificada no existe.");
            }

            var category = new Category
            {
                Name = categoryDto.Name,
                SectionId = sectionId
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        // Obtener una categoría por ID
        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            var category = await _context.Categories
                .Include(c => c.Section)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (category == null)
            {
                throw new KeyNotFoundException("Categoría no encontrada.");
            }

            return category;
        }

        // Obtener todas las categorías
        public async Task<List<CategoryDto>> GetAllCategoryAsync()
        {
            return await _context.Categories
                .Include(c => c.Section)
                .Select(c => new CategoryDto
                {
                    Name = c.Name,
                    SectionId = c.Section.Id
                })
                .ToListAsync();
        }

        // Actualizar una categoría
        public async Task<Category> UpdateCategoryAsync(int id, CategoryDto categoryDto)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                throw new KeyNotFoundException("Categoría no encontrada.");
            }

            if (categoryDto.SectionId.HasValue && categoryDto.SectionId != category.SectionId)
            {
                var section = await _context.Sections.FindAsync(categoryDto.SectionId.Value);
                if (section == null)
                {
                    throw new KeyNotFoundException("La nueva sección especificada no existe.");
                }

                category.SectionId = categoryDto.SectionId.Value;
            }

            category.Name = categoryDto.Name;

            _context.Categories.Update(category);
            await _context.SaveChangesAsync();

            return category;
        }

        // Eliminar una categoría
        public async Task DeleteCategoryAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                throw new KeyNotFoundException("Categoría no encontrada.");
            }

            var hasProducts = await _context.Products.AnyAsync(p => p.CategoryId == id); // Assuming Products is defined in DbContext
            if (hasProducts)
            {
                throw new InvalidOperationException("No se puede eliminar una categoría con productos asociados.");
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }

    }
}
