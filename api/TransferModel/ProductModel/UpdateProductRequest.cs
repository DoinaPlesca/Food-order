using System.ComponentModel.DataAnnotations;

namespace api.TransferModel;

public class UpdateProductRequest
{
    [Required]
    [StringLength(100, MinimumLength = 5)]
    public string Name { get; set; }

    [Required]
    [StringLength(2000, MinimumLength = 5)]
    public string Description { get; set; }

    [Required(ErrorMessage = "Price is required")]
    [Range(0.01, double.MaxValue, ErrorMessage = "Price must be a positive number")]
    [DataType(DataType.Currency)]
    public decimal Price { get; set; }

    [Required(ErrorMessage = "Quantity is required")]
    [Range(1, int.MaxValue, ErrorMessage = "Quantity must be a positive number")]
    public int Quantity { get; set; }

    [Required]
    [Url]
    public string ImageUrl { get; set; }

    [Required]
    public int CategoryId { get; set; }
}
