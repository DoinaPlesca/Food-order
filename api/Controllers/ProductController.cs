using api.Filter;
using api.Helper;
using api.TransferModel;
using infrastructure.QueryModels;
using infrastructure.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using service;

namespace api.Controllers;

public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly ProductService _productService;
    private readonly ResponseHelper _responseHelper;

    public ProductController(ILogger<ProductController> logger,
        ProductService productService,
        ResponseHelper responseHelper)
    {
        _logger = logger;
        _productService = productService;
        _responseHelper = responseHelper;
    }

    [HttpGet]
    [Route("/food/order/product")]
    public IActionResult GetAllProducts()
    {
        return Ok(_responseHelper.Success(
            StatusCodes.Status200OK,
            "Products fetched successfully",
            _productService.GetAllProducts())
        );
    }

    [HttpPost]
    [ValidateModel]
    [Route("/food/order/new/product")]
    public IActionResult CreateProduct([FromBody] CreateProductRequest dto)
    {
        try
        {
            var newProduct = _productService.CreateProduct(
                dto.Name,
                dto.Description,
                dto.Price,
                dto.Quantity,
                dto.ImageUrl,
                dto.CategoryId
            );

            return Ok(_responseHelper.Success(
                StatusCodes.Status201Created,
                "Successfully created a new product",
                newProduct
            ));
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                "Failed to create a new product",
                ex.Message
            ));
        }
    }



    
    [HttpGet]
    [Route("/food/order/{id}")]
    public IActionResult GetProductById([FromRoute] int id)
    {
        var product = _productService.GetProductById(id);

        if (product != null)
        {
            return Ok(_responseHelper.Success(
                StatusCodes.Status200OK,
                $"Successfully fetched product with Id: {id}",
                product
            ));
        }
        else
        {
            return NotFound(_responseHelper.NotFound(
                $"Product with Id {id} not found",
                $"Product with Id {id} not found"
            ));
        }
    }


    
    [HttpPut]
    [ValidateModel]
    [Route("/food/order/update/{id}")]
    
    public ResponseDto UpdateProductById([FromRoute] int id,
        [FromBody] UpdateProductRequest dto)
    
    {
        HttpContext.Response.StatusCode = 201;
        return new ResponseDto()
        {
            MessageToClient = "Successfully updated",
            ResponseData = _productService.UpdateProduct(id, dto.Name, dto.Description, dto.Price,dto.Quantity,
                    dto.ImageUrl, dto.CategoryId)
        };
    }  
    
    
    
    [HttpGet]
    [Route("category/{categoryId}")]
    public ActionResult<IEnumerable<ProductFeedQuery>> GetProductsByCategory([FromRoute] int categoryId, [FromServices] NpgsqlDataSource dataSource)
    {
        try
        {
            using (var conn = dataSource.OpenConnection())
            {
                var productRepository = new ProductRepository(dataSource);

                if (!productRepository.CategoryExists(conn, categoryId))
                {
                    return NotFound(new ResponseDto
                    {
                        MessageToClient = $"Category with Id {categoryId} not found",
                        ErrorMessage = $"Category with Id {categoryId} not found"
                    });
                }

                var products = productRepository.GetProductsByCategory(categoryId);

                if (products.Any())
                {
                    return Ok(new ResponseDto
                    {
                        MessageToClient = $"Products for Category Id: {categoryId} fetched successfully",
                        ResponseData = products
                    });
                }
                else
                {
                    return NotFound(new ResponseDto
                    {
                        MessageToClient = $"No products found for Category Id: {categoryId}",
                        ErrorMessage = $"No products found for Category Id: {categoryId}"
                    });
                }
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, new ResponseDto
            {
                MessageToClient = "Failed to fetch products",
                ErrorMessage = ex.Message
            });
        }
    }
    
    
    [HttpDelete]
    [Route("food/order/{id}")]
    public IActionResult DeleteProduct([FromRoute] int id)
    {
        try
        {
            bool isDeleted = _productService.DeleteProduct(id);

            if (isDeleted)
            {
                Console.WriteLine($"Product with ID {id} deleted successfully.");
                return Ok(_responseHelper.Success(StatusCodes.Status200OK, "Product deleted successfully"));
            }
            else
            {
                Console.WriteLine($"Product with ID {id} not found.");
                return NotFound(_responseHelper.NotFound("Product not found", "Product not found"));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting product with ID {id}: {ex.Message}");
            return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                "Failed to delete the product",
                ex.Message
            ));
        }
    }
    
    
    [HttpPost]
    [Route("/food/order/{productId}/category/{categoryId}")]
    public IActionResult AddProductToCategory([FromRoute] int productId, [FromRoute] int categoryId)
    {
        try
        {
            _productService.AddProductToCategory(productId, categoryId);
            return Ok(new ResponseDto
            {
                MessageToClient = "Successfully added product to category"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new ResponseDto
            {
                MessageToClient = "Failed to add product to category",
                ErrorMessage = ex.Message
            });
        }
    }





}



