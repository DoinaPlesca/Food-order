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


    public User RegisterUser(string username, string email, string password, Role role)
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
            _logger.LogError(ex, "Error occurred while registering a new user");
            throw;
        }
    }

    public User? GetUserById(SessionData data)
    {
        return _userRepository.GetUserById(data.Id);
    }


    public bool VerifyPassword(string usernameOrEmail, string password, Role role)
    {
        try
        {
            var user = _userRepository.GetUserByUsernameOrEmail(usernameOrEmail,role);

            if (user == null)
            {
                return false;
            }

            bool isPasswordValid = _passwordHasher.VerifyHashedPassword(password, user.Password, user.Salt);

            if (!isPasswordValid)
            {
                _logger.LogInformation("Invalid password for user with username or email: {UsernameOrEmail}", usernameOrEmail);
            }

            return isPasswordValid;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while verifying password for username or email: {UsernameOrEmail}", usernameOrEmail);
            throw;
        }
    }

    public User GetUserByUsernameOrEmail(string usernameOrEmail, Role role)
    {
        return _userRepository.GetUserByUsernameOrEmail(usernameOrEmail, role);
    }


    public IEnumerable<User> GetUsersByRole(Role role)
    {
        return _userRepository.GetUsersByRole(role.ToString());
    }
}
