using System.Security.Cryptography;
using infrastructure.Repository;
using Microsoft.Extensions.Logging;



public abstract class PasswordHasher
{
    private readonly ILogger<PasswordHasher> _logger;
    const string CurrentAlgorithmName = BCryptHashAlgorithm.Name;

    public static PasswordHasher Create(string algorithmName = CurrentAlgorithmName)
    {
        switch (algorithmName)
        {
            case BCryptHashAlgorithm.Name:
                return new BCryptHashAlgorithm();
            default:
                throw new NotImplementedException();
        }
    }

    public abstract string GetName();

    public abstract string HashPassword(string password, string salt);

    public abstract bool VerifyHashedPassword(string password, string hash, string salt);

    public string GenerateSalt()
    {
        return BCrypt.Net.BCrypt.GenerateSalt(12);
    }


}
   

