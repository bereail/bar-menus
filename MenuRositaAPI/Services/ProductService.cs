using MenuRositaAPI.Models;
using WebApplication1.Models;
using WebApplication1.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace WebApplication1.Services
{
    public class ProductService : IProductService
    {
        private readonly RositaMenuDBContext _context;

        public ProductService(RositaMenuDBContext context)
        {
            _context = context;
        }

        // Obtener todos los productos
        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.Include(p => p.Category).ToListAsync();
        }

        // Obtener un producto por id
        public async Task<Product> GetByIdAsync(int id)
        {
            return await _context.Products.Include(p => p.Category)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        // Crear un nuevo producto
        public async Task<Product> CreateAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        // Actualizar un producto existente
        public async Task<Product> UpdateAsync(int id, Product product)
        {
            var existingProduct = await _context.Products.FindAsync(id);
            if (existingProduct == null)
            {
                return null; // Producto no encontrado
            }

            existingProduct.Name = product.Name;
            existingProduct.Description = product.Description;
            existingProduct.Price = product.Price;
            existingProduct.CategoryId = product.CategoryId;

            await _context.SaveChangesAsync();
            return existingProduct;
        }

        // Eliminar un producto
        public async Task<bool> DeleteAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return false; // Producto no encontrado
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}