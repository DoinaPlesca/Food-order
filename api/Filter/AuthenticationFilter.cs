using System.Security.Authentication;
using infrastructure.DataModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;
using service;

namespace api.Filter;

public class AuthenticationFilter : IActionFilter
{
    private readonly UserService _userService;

    public AuthenticationFilter(UserService userService)
    {
        _userService = userService;
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        var authHeaders = context.HttpContext.Request.Headers.Authorization;
        if (authHeaders.IsNullOrEmpty() || authHeaders[0].IsNullOrEmpty())
        {
            throw new AuthenticationException("No user authentication present");
        }

        User user = _userService.VerifyTokenAndReturnUserIfNotBanned(authHeaders);
        context.HttpContext.Items["user"] = user;
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
    }

}