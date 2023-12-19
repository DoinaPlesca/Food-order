using System.Data;
using Dapper;
using infrastructure.DataModels;
using infrastructure.QueryModels;
using Npgsql;

namespace infrastructure.Repository;

public class ProductRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public ProductRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }


  
    public IEnumerable<ProductFeedQuery> GetAllProducts()
    {
        string sql = $@"
       SELECT
           id AS {nameof(ProductFeedQuery.ProductId)},
           name AS {nameof(ProductFeedQuery.Name)},
           description AS {nameof(ProductFeedQuery.Description)},
           price AS {nameof(ProductFeedQuery.Price)},
           quantity AS {nameof(ProductFeedQuery.Quantity)},
           image_url AS {nameof(ProductFeedQuery.ImageUrl)},
           category_id AS {nameof(ProductFeedQuery.CategoryId)}
    
     
       FROM food_order.product";
        using var conn = _dataSource.OpenConnection();
        return conn.Query<ProductFeedQuery>(sql);
    }
    
    
    
    
    public Product CreateProduct(string name, string description,decimal price, int quantity,
        string imageUrl, int categoryId)
    {
        var newProduct = new Product
        {
            Name = name,
            Description = description,
            Price = price,
            Quantity = quantity,
            ImageUrl = imageUrl,
            CategoryId = categoryId
        };

        string sql = @"
        INSERT INTO food_order.product (name, description, price, quantity, image_url, category_id)
        VALUES (@Name, @Description, @Price, @Quantity, @ImageUrl, @CategoryId)
        RETURNING id AS ProductId,name,description,price,quantity, image_url As ImageUrl, category_id As CategoryId";

        using var conn = _dataSource.OpenConnection();
        return conn.QuerySingle<Product>(sql, newProduct);
    }
    
    
    
    public Product GetProductById(int id)
    {
       string sql = @"
        SELECT 
            id AS ProductId,
            name AS Name,
            description AS Description,
            price AS Price,
            quantity AS Quantity,
            image_url AS ImageUrl,
            category_id AS CategoryId
        FROM food_order.product
        WHERE id = @ProductId";

        using var conn = _dataSource.OpenConnection();

        return conn.QueryFirstOrDefault<Product>(sql, new { ProductId = id });
    }
    
    
    public Product UpdateProduct(int id, string name, string description, decimal price, int quantity,
        string imageUrl, int categoryId)
    {
        using (var conn = _dataSource.OpenConnection())
        {
            if (!CategoryExists(conn, categoryId))
            {
                throw new ArgumentException($"Category with id {categoryId} does not exist.");
            }

            var sql = $@"
                UPDATE food_order.product
                SET
                    name = @name,
                    description = @description,
                    price = @price,
                    quantity = @quantity,
                    image_url = @imageUrl,
                    category_id = @categoryId
                WHERE
                    id = @id
                RETURNING
                    id AS {nameof(Product.ProductId)},
                    name AS {nameof(Product.Name)},
                    description AS {nameof(Product.Description)},
                    price AS {nameof(Product.Price)},
                    quantity AS {nameof(Product.Quantity)},
                    image_url AS {nameof(Product.ImageUrl)},
                    category_id AS {nameof(Product.CategoryId)}";

            return conn.QueryFirst<Product>(sql, new
            {
                id,
                name,
                description,
                price,
                quantity,
                imageUrl,
                categoryId
            });
        }
    }

    public IEnumerable<ProductFeedQuery> GetProductsByCategory(int categoryId)
    {
        string sql = $@"
        SELECT
            p.id AS {nameof(ProductFeedQuery.ProductId)},
            p.name AS {nameof(ProductFeedQuery.Name)},
            p.description AS {nameof(ProductFeedQuery.Description)},
            p.price AS {nameof(ProductFeedQuery.Price)},
            p.quantity AS {nameof(ProductFeedQuery.Quantity)},
            p.image_url AS {nameof(ProductFeedQuery.ImageUrl)},
            p.category_id AS {nameof(ProductFeedQuery.CategoryId)}
        FROM food_order.product p
        JOIN food_order.category c ON p.category_id = c.categoryid
        WHERE c.categoryid = @CategoryId";

        using var conn = _dataSource.OpenConnection();
        return conn.Query<ProductFeedQuery>(sql, new { CategoryId = categoryId });
    }

    public bool CategoryExists(IDbConnection connection, int categoryId)
    {
        var sql = "SELECT COUNT(*) FROM food_order.category WHERE categoryid = @categoryId";
        return connection.ExecuteScalar<int>(sql, new { categoryId }) > 0;
        
        // update:execute a query and return the result of the first
        // column of the first row in the result set
    }
    
    
    
    public bool DeleteProduct(int id)
    {
        var sql = @"
        DELETE FROM food_order.product
        WHERE id = @id;
    ";
        using (var conn = _dataSource.OpenConnection())
        {
            var rowsAffected = conn.Execute(sql, new { id });
            return rowsAffected > 0;
        }
    }
    
    public void AddProductToCategory(int productId, int categoryId)
    {
        string sql = @"
        UPDATE food_order.product
        SET category_id = @CategoryId
        WHERE id = @ProductId";
    
        using (var conn = _dataSource.OpenConnection())
        {
            conn.Execute(sql, new { ProductId = productId, CategoryId = categoryId });
        }
    }


}