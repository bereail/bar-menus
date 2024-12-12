using MenuRositaAPI.Models;

namespace WebApplication1.Services.Interfaces
{
    public interface ISectionService
    {
        Task<Section> GetSectionByIdAsync(int id);
        Task<Section> CreateSectionAsync(Section section);
    }
}
