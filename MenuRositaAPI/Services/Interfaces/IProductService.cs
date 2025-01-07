using System.Threading.Tasks;
using WebApplication1.Models.Dtos;

namespace WebApplication1.Services.Interfaces
{
    public interface IProductService
    {
        // Obtener todos los productos
        Task<List<ProductDto>> GetAllProductAsync();

        // Obtener un producto por id
        Task<ProductDto> GetProductByIdAsync(int id);

        // Crear un nuevo producto
        Task<ProductDto> CreateProductAsync(ProductDto productDto);

        // Actualizar un producto existente
        Task<ProductDto> UpdateProductAsync(int id, ProductDto productDto);

        // Eliminar un producto
        Task<bool> DeleteProductAsync(int id);
    }
}

