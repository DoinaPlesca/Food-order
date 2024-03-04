using infrastructure.DataModels;

namespace service;

public class SessionData
{
    public required int Id { get; init; }
    public required Role Role { get; init; }

    public static SessionData FromUser(User user)
    {
        return new SessionData { Id = user.Id, Role = user.Role };
    }

    public static SessionData FromDictionary(Dictionary<string, object> dict)
    {
        return new SessionData { Id = (int)dict[Keys.Id], Role = Enum.Parse<Role>((string) dict[Keys.Role]) };
    }

    public Dictionary<string, object> ToDictionary()
    {
        return new Dictionary<string, object> { { Keys.Id, Id }, { Keys.Role, Enum.GetName(Role)! } };
    }

    public static class Keys
    {
        public const string Id = "user";
        public const string Role = "role";
    }
}
    
