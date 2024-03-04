using System.Net;
using System.Net.Http.Json;
using System.Text;
using api.TransferModel;
using Dapper;
using FluentAssertions;
using infrastructure.DataModels;
using Newtonsoft.Json;
namespace test;

[TestFixture]
public class CreateTests : PageTest
{   
    /*[TestCase("Tetstsssss", "https://images.unsplash.com/photo-1696621690997-14ebd5519c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")]
    public async Task BoxCanSuccessfullyBeCreatedFromUi(string categoryname, string categoryimageurl)
    {
        // ARRANGE
        Helper.TriggerRebuild();

        // ACT
        await Page.GotoAsync(Helper.BaseUrl);
        await Page.ClickAsync("[data-testid=openCategoryModalButton]");
        // Fill in the category name input field
        await Page.FillAsync("[data-testid=categoryName-input]", categoryname);

        await Page.FillAsync("[data-testid=categoryImageUrl-input]", categoryimageurl);

        // Click the save button
        await Page.ClickAsync("[data-testid=save-button]");

        // ASSERT
        // Wait for the row with the specified category name to be visible
        await Expect(Page.GetByTestId("row_" + categoryname)).ToBeVisibleAsync();

        // Query database and assert
        await using var conn = await Helper.DataSource.OpenConnectionAsync();
        var expected = new Category()
        {
            CategoryId = 1,
            CategoryImageUrl = categoryimageurl
        };
        conn.QueryFirst<Category>("SELECT * FROM food_order.category;").Should()
            .BeEquivalentTo(expected);
    }*/
    
 
    
    [TestCase("FastFood", "https://coolimage.com/img.jpg")]
    [TestCase("SeeFood", "https://coolimage.com/img.jpg")]
    [TestCase("ItalianFood", "https://coolimage.com/img.jpg")]
    public async Task CategoryCanSuccessfullyBeCreatedFromHttpRequest
        (string categoryname, string categoryimageUrl)
    { 
        // ARRANGE
        Helper.TriggerRebuild();
        
        var testCategory= new Category()
        {
            CategoryId = 1,
            CategoryName = categoryname,
            CategoryImageUrl = categoryimageUrl};
        
        //ACT
        var httpResponse = await new HttpClient().PostAsJsonAsync
            (Helper.ApiBaseUrl + "/category", testCategory);
        var boxFromResponseBody =
            JsonConvert.DeserializeObject<Category>
                (await httpResponse.RequestMessage?.Content?.ReadAsStringAsync()!);
        
        // ASSERT
        await using var conn = await Helper.DataSource.OpenConnectionAsync();
        
        conn.QueryFirst<Category>("SELECT * FROM food_order.category;").Should()
            .BeEquivalentTo(boxFromResponseBody);
    }
    
    
    
    [TestCase("d", "invalid-url")] 
    [TestCase(null, "invalid-url")] 
    [TestCase("", "invalid-url")] 
    public async Task ServerSideValidationShouldRejectInvalidData(string categoryName, string categoryImageUrl)
    { 
        // ARRANGE
        Helper.TriggerRebuild();

        var createCategoryRequest = new CreateCategoryRequest
        {
            CategoryName = categoryName,
            CategoryImageUrl = categoryImageUrl
        };
        //ACT
        var jsonContent = JsonConvert.SerializeObject(createCategoryRequest);
        var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        var httpResponse = await new HttpClient().PostAsync
            (Helper.ApiBaseUrl + "/category", content);

        // ASSERT
        httpResponse.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        
    }
    
    
    
    [TestCase("", "invalid-url", 0, 0, "", 0)] 
    [TestCase("tee", "url", -2, 0, "invalid-url", 0)] 
    public async Task ServerSideValidation(
        string name,
        string description,
        decimal price,
        int quantity,
        string image_url,
        int category_id)
    {
        //ARRANGE
        Helper.TriggerRebuild();
        var createProductRequest = new CreateProductRequest
        {
            Name = name,
            Description = description,
            Price = price,
            Quantity = quantity,
            ImageUrl = image_url,
            CategoryId = category_id
        };
        
        //ACT
        var jsonContent = JsonConvert.SerializeObject(createProductRequest);
        var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

        var httpResponse = await new HttpClient().PostAsync(Helper.ApiBaseUrl + "/new/product", content);
       //ASSERT
        Console.WriteLine($"Actual Status Code: {httpResponse.StatusCode}");
        httpResponse.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }
    
    

    
}