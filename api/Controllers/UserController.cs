using api.Filter;
using api.Helper;
using api.TransferModel;
using Microsoft.AspNetCore.Mvc;
using service;

namespace api.Controllers;

public class UserController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly UserService _userService;
    private readonly ResponseHelper _responseHelper;

    public UserController(ILogger<ProductController> logger,
        UserService userService,
        ResponseHelper responseHelper)
    {
        _logger = logger;
        _userService= userService;
        _responseHelper = responseHelper;
    }
    
    [HttpGet]
    [Route("/api/all/users")]
    public IActionResult GetAllUsers()
    {
        return Ok(_responseHelper.Success(
            StatusCodes.Status200OK,
            "Products fetched successfully",
            _userService.GetAllUsers())
        );
    }
    
    /*[HttpPost]
    [ValidateModel]
    [Route("/api/new/user")]
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
    */



    
}