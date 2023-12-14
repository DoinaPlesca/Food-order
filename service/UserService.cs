using BCrypt.Net;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using infrastructure.Repository;
using Microsoft.Extensions.Logging;

namespace service;

public class UserService
{
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

    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        return _userRepository.GetAllUsers();
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


    public bool VerifyPassword(string usernameOrEmail, string password)
    {
        try
        {
            var user = _userRepository.GetUserByUsernameOrEmail(usernameOrEmail);

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

    public IEnumerable<User> GetUsersByRole(string role)
    {
        return _userRepository.GetUsersByRole(role);
    }
}
