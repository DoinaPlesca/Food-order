using api.Filter;
using api.Helper;
using api.TransferModel;
using Microsoft.AspNetCore.Mvc;
using service;

namespace api.Controllers;

public class CategoryController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly CategoryService _categoryService;
    private readonly ResponseHelper _responseHelper;

    public CategoryController (ILogger<ProductController> logger,
        CategoryService categoryService,
        ResponseHelper responseHelper)
    {
        _logger = logger;
        _categoryService = categoryService;
        _responseHelper = responseHelper;
    }
    
    [HttpGet]
    [Route("/food/order/category")]
    public IActionResult GetAllCategories()
    {
        return Ok(_responseHelper.Success(
            StatusCodes.Status200OK,
            "Categories fetched successfully",
            _categoryService.GetAllCategories())
        );
    }
    [HttpPost]
    [ValidateModel]
    [Route("/food/order/category")]
    public IActionResult CreateCategory([FromBody] CreateCategoryRequest request)
    {
        try
        {
            var newCategory = _categoryService.CreateCategory(request.Name, request.ImageUrl);
            return Ok(_responseHelper.Success(StatusCodes.Status201Created, "Category created successfully", newCategory));
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                "Failed to create the category",
                ex.Message
            ));
        }
    }
    
    
    [HttpPut]
    [ValidateModel]
    [Route("/food/order/category/{id}")]
    public IActionResult UpdateCategoryById([FromRoute] int id, [FromBody] UpdateCategoryRequest request)
    {
        try
        {
            var updatedCategory = _categoryService.UpdateCategory(id, request.Name, request.ImageUrl);

            if (updatedCategory != null)
            {
                return Ok(_responseHelper.Success(
                    StatusCodes.Status200OK,
                    "Category updated successfully",
                    updatedCategory
                ));
            }
            else
            {
                return NotFound(_responseHelper.NotFound(
                    $"Category with Id {id} not found",
                    $"Category with Id {id} not found"
                ));
            }
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                "Failed to update the category",
                ex.Message
            ));
        }
    }
    
    
    [HttpDelete]
    [Route("food/order/category{categoryId}")]
    public IActionResult DeleteCategory([FromRoute] int categoryId)
    {
        try
        {
            bool isDeleted = _categoryService.DeleteCategory(categoryId);

            if (isDeleted)
            {
                return Ok(_responseHelper.Success(StatusCodes.Status200OK, "Category deleted successfully"));
            }
            else
            {
                return NotFound(_responseHelper.NotFound("Category not found", "Category not found"));
            }
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                "Failed to delete the category",
                ex.Message
            ));
        }
    }
 



}