using infrastructure.DataModels;

namespace infrastructure.QueryModels;

public class ProductFeedQuery
{
    public int ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
    public string Image_url { get; set; }
    public int CategoryId { get; set; }
    
    public Category Category { get; set; }

}