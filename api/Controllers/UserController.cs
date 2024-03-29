﻿using api.Filter;
using api.Helper;
using api.HttpContextExtensions;
using api.TransferModel;
using api.TransferModel.LoginModel;
using BCrypt.Net;
using infrastructure.DataModels;
using infrastructure.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using service;

namespace api.Controllers;

public class UserController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly UserService _userService;
    private readonly ResponseHelper _responseHelper;
    private readonly PasswordHasher _passwordHasher;
    private JwtService _jwtService;
   

    public UserController(
        ILogger<ProductController> logger,
        UserService userService,
        ResponseHelper responseHelper,
        PasswordHasher passwordHasher,
        JwtService jwtService)
    {
        _logger = logger;
        _userService = userService;
        _responseHelper = responseHelper;
        _passwordHasher = passwordHasher ?? throw new ArgumentNullException(nameof(passwordHasher));
        _jwtService = jwtService;
    }
    

    
    [HttpGet]
    [Route("/api/restaurant/users")]
    public IActionResult GetAllUsers()
    {
        return Ok(_responseHelper.Success(
            StatusCodes.Status200OK,
            "Users fetched successfully",
            _userService.GetAllUsers())
        );
    }
    
    
    [RequireAuthentication]
    [HttpGet]
    [Route("/api/restaurant/user/currently")]
    public ResponseDto CurrentlyUser()
    {
        var data = HttpContext.GetSessionData();
        var user = _userService.GetUserById(data);
        return new ResponseDto
        {
            ResponseData = user
        };
    }
    

    [HttpPost]
    [ValidateModel]
    [Route("/api/restaurant/register")]
    public IActionResult RegisterUser([FromBody] RegistrationRequest request)
    { 
        try
        {
            var newUser = _userService.RegisterUser(request.username, request.email, request.password, request.Role);
            var userResponse = new UserResponseDto
            {
                username = newUser.Username,
                email = newUser.Email,
                Role = newUser.Role
           
            };
            return Ok(userResponse);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed to register a new user");
        }
    }

  
    
    [HttpPost]
    [ValidateModel]
    [Route("/api/restaurant/login")]
    public IActionResult Login([FromBody] AuthenticationRequest dto)
    {
        try
        {
            var usernameOrEmail = dto.UsernameOrEmail;
            var password = dto.Password;
            var role = dto.Role;

            if (!_userService.VerifyPassword(usernameOrEmail, password, role))
            {
                return StatusCode(StatusCodes.Status401Unauthorized,
                    _responseHelper.InternalServerError("Invalid username/email or password", errorMessage: "fail"));
            }

            var user = _userService.GetUserByUsernameOrEmail(usernameOrEmail, role);
            
            HttpContext.SetSessionData(SessionData.FromUser(user));
           
            var token = _jwtService.IssueToken(SessionData.FromUser(user));
            var response = new TokenResponseDto()
            {
                Token = token
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                _responseHelper.InternalServerError("Failed to perform login", ex.Message));
        }
    }

    [HttpPost]
    [RequireAuthentication] 
    [Route("/api/restaurant/logout")]
    public IActionResult Logout()
    {
        try
        {
            var userData = HttpContext.Session.GetString("data");

            if (string.IsNullOrEmpty(userData))
            {
                
                return StatusCode(StatusCodes.Status401Unauthorized,
                    _responseHelper.InternalServerError("User not authenticated", errorMessage: "fail"));
            }
            
            HttpContext.Session.Clear();

            return Ok(_responseHelper.Success(StatusCodes.Status200OK, "Logout successful"));
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                _responseHelper.InternalServerError("Failed to perform logout", ex.Message));
        }
    }



    [HttpGet]
    [Route("/api/restaurant/role")]
    public IActionResult GetUsersByRole(Role role)
    {
        try
        {
            var users = _userService.GetUsersByRole(role);
            return Ok(users);
        }
        catch (Exception ex)
        {
            return BadRequest("An error occurred while fetching users by role.");
        }
    }

}



