namespace WebApplication1.Models.Dtos
{
public class CategoryDto
{
    public string Name { get; set; }
    public int? SectionId { get; set; }
    public List<ProductDto> Products { get; set; } = new List<ProductDto>();
}
}
