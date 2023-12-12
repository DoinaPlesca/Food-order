using Dapper;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using Npgsql;


namespace infrastructure.Repository;

public class UserRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public UserRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }


    public User GetUserByEmail(string email)
    {
        string sql = @"
        SELECT * FROM ""User"" WHERE email = @Email";

        using var conn = _dataSource.OpenConnection();
        return conn.QueryFirstOrDefault<User>(sql, new { Email = email });
    }

    public IEnumerable<UserFeedQuery> GetAllUsers()
    {
        string sql = $@"
        SELECT * FROM ""User""
        ";
        using var conn = _dataSource.OpenConnection();
        return conn.Query<UserFeedQuery>(sql);
    }
    

    public User CreateUser(string username, string email, string password, string role)
    {
        var hashedPassword = PasswordHasher.HashPassword(password);
        var newUser = new User
        {
            username = username,   
            email = email,
            password = hashedPassword,
            role = role
        };

        string sql = @"
        INSERT INTO ""User"" (username, email, password, role) 
        VALUES (@Username, @Email, @Password, @Role) 
        RETURNING id, username, email,hashedPassword,role"; 

        using var conn = _dataSource.OpenConnection();
        return conn.QuerySingle<User>(sql, newUser);
    }

   
  
}

