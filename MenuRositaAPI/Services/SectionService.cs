using MenuRositaAPI.Models;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services
{
    public class SectionService : ISectionService
    {
        private readonly RositaMenuDBContext _context;

        public SectionService(RositaMenuDBContext context)
        {
            _context = context;
        }

    
        // Crear un nuevo producto
        public async Task<Section> CreateSectionAsync(Section section)
        {
            _context.Sections.Add(section);
            await _context.SaveChangesAsync();
            return section;
        }


        // Obtener un producto por id
        public async Task<Section> GetSectionByIdAsync(int id)
        {
            return await _context.Sections.Include(p => p.Id)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

    }
}
