using MenuRositaAPI.Models;
using WebApplication1.Models.Dtos;
using WebApplication1.Models.Dtos.Credentials;

namespace WebApplication1.Services.Interfaces
{
    public interface ISectionService
    {
        Task<Section> GetSectionByIdAsync(int id);

        Task<List<SectionDto>> GetAllSectionAsync();
        Task<Section> CreateSectionAsync(SectionAllDto sectionDto);

        Task<Section> UpdateSectionAsync(int id, SectionAllDto sectionDto);
        Task DeleteSectionAsync(int id);
    }
}

