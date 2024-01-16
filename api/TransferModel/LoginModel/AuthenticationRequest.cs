using infrastructure.DataModels;

namespace api.TransferModel.LoginModel;

public class AuthenticationRequest
{
    public string UsernameOrEmail { get; set; }
    public string Password { get; set; }
    public Role Role { get; set; }
    
  

    
}
