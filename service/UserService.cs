using infrastructure.DataModels;
using infrastructure.QueryModels;
using infrastructure.Repository;

namespace service;

public class UserService
{
    private readonly UserRepository _userRepository;
    private readonly PasswordHasher _passwordHasher;

    public UserService(UserRepository userRepository, PasswordHasher passwordHasher)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
    }

    public User GetUserByEmail(string email)
    {
        return _userRepository.GetUserByEmail(email);
    }

    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        return _userRepository.GetAllUsers();
    }

    public User CreateUser(string username, string email, string password, string role)
    {
        var hashedPassword = PasswordHasher.HashPassword(password);
        return _userRepository.CreateUser(username, email, hashedPassword, role);
    }

    public bool AuthenticateUser(string email, string enteredPassword)
    {
        var user = _userRepository.GetUserByEmail(email);
        if (user != null)
        {
            var passwordMatch = PasswordHasher.VerifyPassword(user.password, enteredPassword);

            return passwordMatch;
        }


        return false;
    }
}