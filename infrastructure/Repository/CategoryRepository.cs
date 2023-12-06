using Dapper;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using Npgsql;

namespace infrastructure.Repository;

public class CategoryRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public CategoryRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }
    
    
    public IEnumerable<CategoryFeedQuery> GetAllCategories()
    {
        string sql = $@"
           SELECT
               id AS {nameof(CategoryFeedQuery.CategoryId)},
               name AS {nameof(CategoryFeedQuery.CategoryName)},
               image_url AS {nameof(CategoryFeedQuery.CategoryImageUrl)}
         
          FROM food_order.""Category""
       ";
        using var
            conn = _dataSource.OpenConnection();
        return conn.Query<CategoryFeedQuery>(sql);
    }
    
    public Category CreateCategory(string name, string imageUrl)
    {
        var newCategory = new Category
        {
            CategoryName = name,
            CategoryImageUrl= imageUrl,
            
        };

        string sql = @"
        INSERT INTO food_order.""Category"" (name, image_url)
        VALUES (@CategoryName, @CategoryImageUrl)
        RETURNING *";

        using var conn = _dataSource.OpenConnection();
        return conn.QuerySingle<Category>(sql, newCategory);
    }

    
    public Category UpdateCategory(int id, string name, string imageUrl)
    {
        var updatedCategory = new Category
        {
            CategoryId = id,
            CategoryName = name,
            CategoryImageUrl = imageUrl
        };

        string sql = @"
        UPDATE food_order.""Category""
        SET
            name = @CategoryName,
            image_url = @CategoryImageUrl
        WHERE
            id = @CategoryId
        RETURNING *";

        using var conn = _dataSource.OpenConnection();
        return conn.QuerySingle<Category>(sql, updatedCategory);
    }
    
    
    public bool DeleteCategory(int categoryId)
    {
        var sql = @"
        DELETE FROM food_order.""Category""
        WHERE id = @CategoryId;
    ";

        using (var conn = _dataSource.OpenConnection())
        {
            var rowsAffected = conn.Execute(sql, new { CategoryId = categoryId });
            return rowsAffected > 0;
        }
    }


}