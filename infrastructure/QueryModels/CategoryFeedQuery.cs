using infrastructure.DataModels;

namespace infrastructure.QueryModels;

public class CategoryFeedQuery
{
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public string CategoryImageUrl { get; set; }
    
    public ICollection<Product> Products { get; set; }
}