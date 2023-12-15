using Dapper;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using Microsoft.Extensions.Logging;
using Npgsql;
namespace infrastructure.Repository;

public class UserRepository
{
    private readonly NpgsqlDataSource _dataSource;
    private readonly ILogger<UserRepository> _logger;
  

    public UserRepository(NpgsqlDataSource dataSource,
        ILogger<UserRepository> logger)
    {
        _dataSource = dataSource;
        _logger = logger;
        
    }
    public User CreateUser(string username, string email, string hashedPassword, string salt, string algorithm, string role)
    {
        try
        {
            var newUser = new User
            {
                username = username,
                email = email,
                password = hashedPassword,
                salt = salt,
                algorithm = algorithm,
                role = role
            };

            string sql = @"
            INSERT INTO food_order.""User"" (username,email,password,salt,algorithm,role)
            VALUES (@username , @email, @password, @salt, @algorithm, @role)
            RETURNING id,username,email,password,salt,algorithm, role";

            using var conn = _dataSource.OpenConnection();
            var createdUser = conn.QuerySingle<User>(sql, newUser);

            _logger.LogInformation("User created successfully. ID: {UserId}", createdUser.id);
            return createdUser;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while creating a new user");
            
            throw;
        }
    }


    public User GetUserByUsernameOrEmail(string usernameOrEmail,string role)
    {
        string sql = @"SELECT id, username, email, password, salt, algorithm, role 
                   FROM food_order.""User"" 
                   WHERE (username = @UsernameOrEmail OR email = @UsernameOrEmail)
                     AND role = @Role";

        Console.WriteLine($"Executing SQL query: {sql}");

        using var conn = _dataSource.OpenConnection();
    
        return conn.QuerySingleOrDefault<User>(sql, new { UsernameOrEmail = usernameOrEmail, Role = role });
    }

    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        string sql = $@"
        SELECT * FROM food_order.""User""
        ";
        using var conn = _dataSource.OpenConnection();
        return conn.Query<UserFeedQuery>(sql);
    }
    
    public IEnumerable<User> GetUsersByRole(string role)
    {
        string sql = $"SELECT id, username, email, password, salt, algorithm, role FROM food_order.\"User\" WHERE role = @Role";
    
        using var conn = _dataSource.OpenConnection();
        var users = conn.Query<User>(sql, new { Role = role });

        return users;
    }


   
  
}

