namespace infrastructure.DataModels;

public class Category
{
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public string CategoryImageUrl { get; set; }
    
    public ICollection<Product> Products { get; set; }
}