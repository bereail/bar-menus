/*
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
            // Validar que la sección existe
            var section = await _context.Sections.FindAsync(sectionId);
            if (section == null)
            {
                throw new KeyNotFoundException("La sección especificada no existe.");
            }

            // Convertir CategoryDto a Category y asociarla a la sección
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
                .Include(c => c.Section) // Incluir la sección asociada si es necesario
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
            var categories = await _context.Categories
                .Include(c => c.Section)
                .Select(c => new CategoryDto
                {
                    Name = c.Name,
                    SectionId = c.Section.Id // Supone que CategoryDto tiene SectionId
                })
                .ToListAsync();

            return categories;
        }

        // Actualizar una categoría
        public async Task<Category> UpdateCategoryAsync(int id, CategoryDto categoryDto)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
            {
                throw new KeyNotFoundException("Categoría no encontrada.");
            }

            // Validar que la sección asociada existe si cambia de sección
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
            {                throw new KeyNotFoundException("Categoría no encontrada.");
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }

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
}*/