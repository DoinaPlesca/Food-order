﻿using api.Filter;
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
    [Route("/api/restaurant/category")]
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
    [Route("/api/restaurant/category")]
    public IActionResult CreateCategory([FromBody] CreateCategoryRequest request)
    {
        try
        {
            var newCategory = _categoryService.CreateCategory(request.CategoryName, request.CategoryImageUrl);

            if (newCategory != null && newCategory.CategoryId > 0)
            {
                return Ok(_responseHelper.Success(StatusCodes.Status201Created, "Category created successfully", newCategory));
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError(
                    "Failed to create the category",
                    "Category creation result is invalid or missing CategoryId."
                ));
            }
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
    [Route("/api/restaurant{categoryId}")]
    public ResponseDto UpdateCategoryById([FromRoute] int categoryId, 
        [FromBody] UpdateCategoryRequest dto)
    {
        HttpContext.Response.StatusCode = 201;
        return new ResponseDto()
        {
            MessageToClient = "Successfully updated",
            ResponseData = _categoryService.UpdateCategory(categoryId, dto.CategoryName,dto.CategoryImageUrl)
        };
    }
    
    
    [HttpDelete]
    [Route("/api/restaurant{categoryId}")]
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
 
    [HttpGet]
    [Route("/api/restaurant{categoryId}")]
    public IActionResult GetCategoryById([FromRoute] int categoryId)
    {
        var category = _categoryService.GetCategoryById(categoryId);

        if (category!= null)
        {
            return Ok(_responseHelper.Success(
                StatusCodes.Status200OK,
                $"Successfully fetched category with Id: {categoryId}",
                category
            ));
        }
        else
        {
            return NotFound(_responseHelper.NotFound(
                $"Category with Id {categoryId} not found",
                $"Category with Id {categoryId} not found"
            ));
        }
    }




}