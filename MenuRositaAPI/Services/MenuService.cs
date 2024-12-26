using WebApplication1.Models.Dtos.Credentials;
using WebApplication1.Models.Dtos;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services
{
    public class MenuService : IMenuService
    {
        private readonly RositaMenuDBContext _context;

        public MenuService(RositaMenuDBContext context)
        {
            _context = context;
        }

        public async Task<List<SectionAllDto>> GetMenuAsync()
        {
            var sections = await _context.Sections
                .Include(s => s.Categories)
                .ThenInclude(c => c.Products)
                .ToListAsync();

            return sections.Select(section => new SectionAllDto
            {
                Id = section.Id,
                Name = section.Name,
                Categories = section.Categories.Select(category => new CategoryAllDto
                {
                    Id = category.Id,
                    Name = category.Name,
                    Products = category.Products.Select(product => new ProductAllDto
                    {
                        Id = product.Id,
                        Name = product.Name,
                        Description = product.Description,
                        Price = product.Price
                    }).ToList()
                }).ToList()
            }).ToList();
        }
    }
}
