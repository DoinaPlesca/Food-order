using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace api.TransferModel;

public class UpdateCategoryRequest
{
    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 1)]
    public string Name { get; set; }

    [Url]
    public string ImageUrl { get; set; }
    
}