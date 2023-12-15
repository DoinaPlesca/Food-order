namespace api.TransferModel.LoginModel;

public class AuthenticationRequest
{
    public string UsernameOrEmail { get; set; }
    public string Password { get; set; }
    
    public string Role { get; set; }

    
}
