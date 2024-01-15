namespace infrastructure.Repository;


public class BCryptHashAlgorithm : PasswordHasher
{
    public const string Name = "bcrypt";
    public override string GetName() => Name;

    public override string HashPassword(string password, string salt)
    {
        Console.WriteLine($"Salt: {salt}");
        if (!salt.StartsWith("$2a$") && !salt.StartsWith("$2b$") && !salt.StartsWith("$2y$"))
        {
            throw new ArgumentException("Invalid BCrypt salt format", nameof(salt));
        }
        return BCrypt.Net.BCrypt.HashPassword(password, salt);
    }
    public override bool VerifyHashedPassword(string password, string hash, string salt)
    {
        return BCrypt.Net.BCrypt.Verify(password, hash);
    }

}
    
