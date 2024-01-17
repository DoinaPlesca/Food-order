using System.Security.Authentication;
using api.HttpContextExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;


namespace api.Filter;

public class RequireAuthentication : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.HttpContext.GetSessionData() == null)
        {
            context.Result = new UnauthorizedResult();
        }
    }
}
