using infrastructure.DataModels;

namespace api.TransferModel.LoginModel;

public class UserResponseDto
{
   public string username { get; set; }
   public string email { get; set; }
   public Role Role { get; set; }

   
  
}