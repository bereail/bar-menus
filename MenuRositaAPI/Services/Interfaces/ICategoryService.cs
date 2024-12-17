using MenuRositaAPI.Models;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<Category> GetCategoryByIdAsync(int id);

        Task<Category> CreateCategoryAsync(CategoryDto categoryDto, int sectionId);

        Task<Category> EditCategoryAsync(int id, CategoryDto categoryDto);

        Task DeleteCategoryAsync(int id);
    }
}
