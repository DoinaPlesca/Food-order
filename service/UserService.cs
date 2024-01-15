using System.IdentityModel.Tokens.Jwt;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using infrastructure.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;

namespace service;

public class UserService
{
    private static readonly byte[] Secret = Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("dotnetsecret")!);
    
    private readonly UserRepository _userRepository;
    private readonly ILogger<UserService> _logger;
    private readonly PasswordHasher _passwordHasher;
    

    public UserService(UserRepository userRepository, ILogger<UserService> logger,
        PasswordHasher passwordHasher)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _userRepository = userRepository;
        _passwordHasher = passwordHasher ?? throw new ArgumentNullException(nameof(passwordHasher));
    }

    
    public void WarningIfSecretIsNotValid()
    {
        if (Secret == null || Secret.Length < 64)
        {
            Console.WriteLine("\nWARNING: Secret is NULL or shorter that 64 character.");
        }
        else
        {
            Console.WriteLine($"\nSecret Key: {Secret}\n");
        }
    }
    

    public string CreateJsonWebToken (List<KeyValuePair<string, object>> payloadItems)
    {
        var claimsList = new List<Claim>();
        foreach (KeyValuePair<string, object> o in payloadItems)
        {
            claimsList.Add(new Claim(o.Key, o.Value.ToString() ?? string.Empty));
        }

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claimsList),
            Expires = DateTime.UtcNow.AddYears(1),
            SigningCredentials =
                new SigningCredentials(new SymmetricSecurityKey(Secret), SecurityAlgorithms.HmacSha256Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        try
        {
            return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
        }
        catch (Exception e)
        {
            throw new Exception("Failed to create token", e.InnerException);
        }
        
    }

    private JwtSecurityToken ValidateAndReturnToken(StringValues authenticationHeader)
    {
        try
        {
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Secret),
                ValidateIssuer = false,
                ValidateAudience = false,
            };

            new JwtSecurityTokenHandler().ValidateToken(authenticationHeader[0],
                validationParameters,
                out SecurityToken token);
            return (JwtSecurityToken)token;
        }
        catch (Exception e)
        {
            throw new AuthenticationException("Failed to validate user identity from token", e.InnerException);
        }
        
    }
    private User CheckUserInDbThroughDecodeToken(JwtSecurityToken decodedToken)
    {
        var userIdClaim = decodedToken.Claims.FirstOrDefault(claim => claim.Type == "endUserId");
        if (ReferenceEquals(userIdClaim, null))
        {
            throw new AuthenticationException("No User ID in JWT payload");
        }

        if (!int.TryParse(userIdClaim.Value, out int userId))
        {
            throw new FormatException("Cannot parse user ID as integer");
        }

        try
        {
            return _userRepository.GetUserById(userId);
        }
        catch (Exception e)
        {
            throw new Exception("User could not be found", e);
        }
        
    }
    
    public List<KeyValuePair<string, object>> DefaultKeyValuesForJwtPayload(User user)
    {
        return new List<KeyValuePair<string, object>>
        {
            new("id", user.id),
            new("username", user.username),
            new("email", user.email),
            new("role", user.role),
        };
    }

    public User VerifyTokenAndReturnUserIfNotBanned(StringValues authenticationHeader)
    {
        return CheckUserInDbThroughDecodeToken(ValidateAndReturnToken(authenticationHeader));
    }
    
    

    public User RegisterUser(string username, string email, string password, string role)
    {
        try
        {
            var salt = _passwordHasher.GenerateSalt();
            var hashedPassword = _passwordHasher.HashPassword(password, salt);
            var algorithm = _passwordHasher.GetName();
            var newUser = _userRepository.CreateUser(username, email, hashedPassword, salt, algorithm, role);
            
            return newUser;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
            Console.WriteLine($"StackTrace: {ex.StackTrace}");
            throw;
        }
    }


    
    
  


    public bool VerifyPassword(string usernameOrEmail, string password,string role)
    {
        try
        {
            var user = _userRepository.GetUserByUsernameOrEmail(usernameOrEmail,role);

            if (user == null)
            {
                Console.WriteLine($"User: {user}");
                return false;
            }

            bool isPasswordValid = _passwordHasher.VerifyHashedPassword(password, user.password, user.salt);
            Console.WriteLine($"Password validation result: {isPasswordValid}");

            if (!isPasswordValid)
            {
                Console.WriteLine($"Invalid password for user with username or email: {usernameOrEmail}");
            }

            return isPasswordValid;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error verifying password for username or email: {usernameOrEmail}. Exception: {ex}");
            throw;
        }
    }
    
    public User GetUserByUsernameOrEmail(string usernameOrEmail, string role)
    {
        try
        {
            // Call the repository method to get the user
            var user = _userRepository.GetUserByUsernameOrEmail(usernameOrEmail, role);

            if (user == null)
            {
                Console.WriteLine($"No user found for {usernameOrEmail} with role {role}");
            }

            return user;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error getting user by username or email: {ex}");
            throw;
        }
    }

    
    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        return _userRepository.GetAllUsers();
    }

    public IEnumerable<User> GetUsersByRole(string role)
    {
        return _userRepository.GetUsersByRole(role);
    }
}
