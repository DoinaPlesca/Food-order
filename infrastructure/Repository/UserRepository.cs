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
    
    
    public User CreateUser(string username, string email, string hashedPassword, string salt, string algorithm, Role role)
    {
        try
        {
            var newUser = new User
            {
                Username = username,
                Email = email,
                Password = hashedPassword,
                Salt = salt,
                Algorithm = algorithm,
                Role = role
            };

            string sql = @"
            INSERT INTO food_order.user_table (username, email, password, salt, algorithm, role)
            VALUES (@Username, @Email, @Password, @Salt, @Algorithm, @Role)
            RETURNING id, username, email, password, salt, algorithm, role";

            using var conn = _dataSource.OpenConnection();
            var createdUser = conn.QuerySingle<User>(sql, new
            {
                newUser.Username,
                newUser.Email,
                newUser.Password,
                newUser.Salt,
                newUser.Algorithm,
                Role = role.ToString()  
            });

            return createdUser;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while creating a new user");
            throw;
        }
    }

    
    
    
    public User GetUserById(int id)
    {
        string sql = $"SELECT id, username, email, password, salt, algorithm, role " +
                     $"FROM food_order.user_table WHERE id = @Id";

        using var conn = _dataSource.OpenConnection();
        var user = conn.Query<User>(sql, new { Id = id }).SingleOrDefault();

        return user;
    }



    public User GetUserByUsernameOrEmail(string usernameOrEmail, Role role)
    {
        string sql = @"SELECT id, username, email, password, salt, algorithm, role 
               FROM food_order.user_table
               WHERE (username = @UsernameOrEmail OR email = @UsernameOrEmail)
                 AND role = @Role";

        using var conn = _dataSource.OpenConnection();

        var parameters = new { UsernameOrEmail = usernameOrEmail, Role = new DbString { Value = role.ToString(),  Length = role.ToString().Length } };
        return conn.QuerySingleOrDefault<User>(sql, parameters);
    }

    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        string sql = $@"
        SELECT * FROM food_order.user_table
        ";
        using var conn = _dataSource.OpenConnection();
        return conn.Query<UserFeedQuery>(sql);
    }
    
    public IEnumerable<User> GetUsersByRole(string role)
    {
        string sql = $"SELECT id, username, email, password, salt, algorithm, role " +
                     $"FROM food_order.user_table WHERE role = @Role";
    
        using var conn = _dataSource.OpenConnection();
        var users = conn.Query<User>(sql, new { Role = role });

        return users;
    }


   
  
}

