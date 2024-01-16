using System.Text.Json.Serialization;
using Newtonsoft.Json.Converters;

namespace infrastructure.DataModels;

public class User
{
    public int Id { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? Salt { get; set; }
    
    public string? Algorithm { get; set; }

    public required Role Role { get; set; }
}
  public enum Role
  {
    User= 0,
    Admin = 1
  }