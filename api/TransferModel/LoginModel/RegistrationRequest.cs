using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using infrastructure.DataModels;

namespace api.TransferModel.LoginModel;

public class RegistrationRequest
{

    [Required]
    [StringLength(255, MinimumLength = 3)]
    public string username { get; set; }


    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string email { get; set; }

 
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string password { get; set; }
    

  
    [Required]
     public Role Role { get; set; }

    
}
