using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace api.TransferModel.LoginModel;

public class RegistrationRequest
{
   
    [Required]
    [StringLength(255, MinimumLength = 3)]
    public string username { get; set; }

   
    [Required]
    [StringLength(255, MinimumLength = 5)]
    [EmailAddress]
    public string email { get; set; }

   
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string password { get; set; }
    

  
    [Required]
    [StringLength(255, MinimumLength = 1)]
    public string role { get; set; }
    
}
