using Dapper;
using FluentAssertions;
using infrastructure.DataModels;


namespace test;

[TestFixture]
public class DeleteTests : PageTest
{
    [TestCase("Test delete", "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg")]
    [TestCase("Burger", "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg")]
    [TestCase("Pasta", "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg")]
    public async Task DeleteCategoryFromHttpClient(
        string categoryname,
        string categoryimageurl
    )
    {
        Helper.TriggerRebuild();
        int categoryId;
        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            categoryId = conn.QueryFirst<int>(
                "INSERT INTO food_order.category(categoryname, categoryimageurl) VALUES (@CategoryName, @CategoryImageUrl) RETURNING categoryid;",
                new { CategoryName = categoryname, CategoryImageUrl = categoryimageurl });
        }

        var httpResponse = await new HttpClient().DeleteAsync(Helper.ApiBaseUrl + $"{categoryId}");

        httpResponse.Should().BeSuccessful();

        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            conn.ExecuteScalar<int>("SELECT COUNT(*) FROM food_order.category;").Should().Be(0);
        }
    }



    [TestCase("Pasta", "something", 20, 2,
        "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg", 2)]
    public async Task DeleteProductFromHttpClient(
        string name,
        string description,
        decimal price,
        int quantity,
        string image_url,
        int category_id
    )
    {
        Helper.TriggerRebuild();

        int categoryId;
        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            categoryId = conn.QueryFirstOrDefault<int>(
                "SELECT categoryid FROM food_order.category WHERE categoryid = @CategoryId;",
                new { CategoryId = category_id });

            if (categoryId == 0)
            {

                categoryId = conn.QueryFirst<int>(
                    "INSERT INTO food_order.category(categoryid, categoryname, categoryimageurl) " +
                    "VALUES (@CategoryId, 'CategoryName', 'CategoryImageUrl') RETURNING categoryid;",
                    new { CategoryId = category_id });
            }
        }

        int productId;
        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            productId = conn.QueryFirst<int>(
                "INSERT INTO food_order.product(name, description, price, quantity, image_url, category_id) " +
                "VALUES (@Name, @Description, @Price, @Quantity, @ImageUrl, @CategoryId) RETURNING id;",
                new
                {
                    Name = name,
                    Description = description,
                    Price = price,
                    Quantity = quantity,
                    ImageUrl = image_url,
                    CategoryId = categoryId
                });
        }

        var httpResponse = await new HttpClient().DeleteAsync(Helper.ApiBaseUrl + $"/{productId}");

        httpResponse.Should().BeSuccessful();

        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            conn.ExecuteScalar<int>("SELECT COUNT(*) FROM food_order.product;").Should().Be(0);
        }
    }


}
/*
[TestCase("Test delete", "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg")]
public async Task CategoryCanSuccessfullyBeDeletedFromUi(string categoryname, string categoryimageurl)
{

        // Arrange
        Helper.TriggerRebuild();

        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            conn.QueryFirst<Category>(
                "INSERT INTO food_order.category (categoryname, categoryimageurl) " +
                "VALUES (@CategoryName, @CategoryImageUrl) " +
                "RETURNING *;",
                new
                {
                    categoryname = "Test delete",
                    categoryimageurl =
                        "https://www.unfade.dk/wp-content/uploads/2022/12/Mystery-Box-Sprayer_All_5039_5.jpeg"
                });
        }

        await Page.GotoAsync(Helper.ApiBaseUrl);
        var row = Page.GetByTestId("[data-testid='delete-box-action']").ClickAsync();


        // Assert
        // Assert
        await Expect(row).Not.ToBeVisibleAsync();

        // Verify that the category has been deleted from the database
        await using (var conn = await Helper.DataSource.OpenConnectionAsync())
        {
            conn.ExecuteScalar<int>("SELECT COUNT(*) FROM food_order.category;").Should().Be(0);
        }
    }
}
*/
