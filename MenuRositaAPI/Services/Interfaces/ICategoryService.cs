using MenuRositaAPI.Models;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<Category> GetCategoryByIdAsync(int id);

        Task<List<CategoryDto>> GetAllCategoryAsync();

        Task<Category> CreateCategoryAsync(CategoryDto categoryDto, int sectionId);
<<<<<<< HEAD
        Task<Category> UpdateCategoryAsync(int id, CategoryDto categoryDto);
=======

        Task<Category> EditCategoryAsync(int id, CategoryDto categoryDto);

>>>>>>> 66969313d46059aa48da75a5132e629bbc1019ab
        Task DeleteCategoryAsync(int id);
    }
}
