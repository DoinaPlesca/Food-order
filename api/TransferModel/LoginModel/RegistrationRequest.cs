using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace api.TransferModel.LoginModel;

public class RegistrationRequest
{
    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 1)]
    public string username { get; set; }

    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string email { get; set; }

    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string password { get; set; }
    

    [NotNull]
    [Required]
    [StringLength(255, MinimumLength = 1)]
    public string role { get; set; }

    
}
