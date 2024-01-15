using api.Filter;
using api.Helper;
using api.TransferModel;
using api.TransferModel.LoginModel;
using BCrypt.Net;
using infrastructure.DataModels;
using infrastructure.Repository;
using Microsoft.AspNetCore.Mvc;
using service;

namespace api.Controllers;

public class UserController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly UserService _userService;
    private readonly ResponseHelper _responseHelper;
    private readonly PasswordHasher _passwordHasher;

    public UserController(
        ILogger<ProductController> logger,
        UserService userService,
        ResponseHelper responseHelper,
        PasswordHasher passwordHasher
        )
    {
        _logger = logger;
        _userService = userService;
        _responseHelper = responseHelper;
        _passwordHasher = passwordHasher ?? throw new ArgumentNullException(nameof(passwordHasher));
         // set to not null
         

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
  
    
    
    [HttpPost]
    [ValidateModel]
    [Route("/api/restaurant/register")]
    public IActionResult RegisterUser([FromBody] RegistrationRequest request)
    {
        try
        {
            var newUser = _userService.RegisterUser(request.username, request.email, request.password, request.role);

            var userResponse = new UserResponseDto
            {
                username = newUser.username,
                email = newUser.email,
               // password = newUser.password,
                role = newUser.role
            };

            var token = _userService.CreateJsonWebToken(_userService.DefaultKeyValuesForJwtPayload(newUser));
            Console.WriteLine($"Generated Token: {token}");
            
            return Ok(new { User = userResponse, Token = token });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest($"Failed to register a new user. {ex.Message}");
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
   
           // Verify the password
           if (!_userService.VerifyPassword(usernameOrEmail, password, role))
           {
               return StatusCode(StatusCodes.Status401Unauthorized,
                   _responseHelper.InternalServerError("Invalid username/email or password", errorMessage: "fail"));
           }
   
           // Fetch user details
           var user = _userService.GetUserByUsernameOrEmail(usernameOrEmail, role);
           
           // Generate JWT token
           var tokenPayload = _userService.DefaultKeyValuesForJwtPayload(user);
           var token = _userService.CreateJsonWebToken(tokenPayload);
           Console.WriteLine($"Generated Token: {token}");
   
           // Return the token in the response
           return Ok(new { Token = token, Message = "Login successful" });
       }
       catch (Exception ex)
       {
           return StatusCode(StatusCodes.Status500InternalServerError, _responseHelper.InternalServerError("Failed to perform login", ex.Message));
       }
   }


    [HttpGet]
    [Route("/api/restaurant/role")]
    public IActionResult GetUsersByRole(string role)
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



