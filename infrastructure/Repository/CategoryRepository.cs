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
        string sql = @"
        SELECT
            CategoryId AS CategoryId,
            CategoryName AS CategoryName,
            CategoryImageUrl  AS CategoryImageUrl
        FROM food_order.category
    ";

        using var conn = _dataSource.OpenConnection();
        return conn.Query<CategoryFeedQuery>(sql);
    }

    
    public Category CreateCategory(string name, string imageUrl)
    {
        var newCategory = new Category
        {
            CategoryName = name,
            CategoryImageUrl = imageUrl
        };

        string sql = @"
        INSERT INTO food_order.category (CategoryName, CategoryImageUrl)
        VALUES (@CategoryName, @CategoryImageUrl)
        RETURNING *";

        using var conn = _dataSource.OpenConnection();
        return conn.QuerySingle<Category>(sql, newCategory);
    }



    public Category UpdateCategory(int categoryId, string categoryName, string categoryImageUrl)
    { 
        var sql = $@"
            UPDATE food_order.category
            SET categoryName = @CategoryName,  categoryImageUrl= @CategoryImageUrl
            WHERE categoryId = @CategoryId
            RETURNING categoryId AS {nameof(Category.CategoryId)},
            categoryName AS {nameof(Category.CategoryName)},
            categoryImageUrl AS {nameof(Category.CategoryImageUrl)}
            ";
        using (var conn = _dataSource.OpenConnection())
        {
            return conn.QueryFirst<Category>(sql, new { categoryId,categoryName, categoryImageUrl });

        }
    }



    public bool DeleteCategory(int categoryId)
    {
        var sql = @"
        DELETE FROM food_order.category
        WHERE categoryId = @CategoryId;
    ";

        using (var conn = _dataSource.OpenConnection())
        {
            var rowsAffected = conn.Execute(sql, new { CategoryId = categoryId });
            return rowsAffected > 0;
        }
    }

    public Category GetCategoryById(int categoryId)
    {
        string sql = @"
        SELECT 
            categoryid AS CategoryId,
            categoryname AS CategoryName,
            categoryimageurl AS CategoryImageUrl
        FROM food_order.category
        WHERE categoryId = @CategoryId";

        using var conn = _dataSource.OpenConnection();

        return conn.QueryFirstOrDefault<Category>(sql, new { CategoryId = categoryId });
    }

        
        
    

}