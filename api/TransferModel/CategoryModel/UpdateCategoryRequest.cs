using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace api.TransferModel;

public class UpdateCategoryRequest
{
    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 4)]
    public string CategoryName { get; set; }

    [Url]
    public string CategoryImageUrl { get; set; }
    
}