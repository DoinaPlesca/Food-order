using infrastructure.DataModels;

namespace api.TransferModel.LoginModel;

public class UserResponseDto
{
   public string username { get; set; }
   public string email { get; set; }
   public string password { get; set; }
   
   public Role Role { get; set; }

   
  
}