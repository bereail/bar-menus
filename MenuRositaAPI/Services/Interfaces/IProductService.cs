using MenuRositaAPI.Models;

namespace WebApplication1.Services.Interfaces
{
    public interface IProductService
    {
        Task<List<Product>> GetAllAsync();
        Task<Product> GetByIdAsync(int id);
        Task<Product> CreateAsync(Product product);
        Task<Product> UpdateAsync(int id, Product product);
        Task<bool> DeleteAsync(int id);
    }
}