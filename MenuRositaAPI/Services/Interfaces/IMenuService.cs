using WebApplication1.Models.Dtos;
using WebApplication1.Models.Dtos.Credentials;

namespace WebApplication1.Services.Interfaces
{
    public interface IMenuService
    {
        Task<List<SectionAllDto>> GetMenuAsync();
    }
}
