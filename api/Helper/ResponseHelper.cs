using api.TransferModel;

namespace api.Helper;

public class ResponseHelper
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public ResponseHelper(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public ResponseDto Success(int statusCode, string messageToClient, object? responseData = null)
    {
        _httpContextAccessor.HttpContext.Response.StatusCode = statusCode;

        return new ResponseDto(messageToClient)
        {
            ResponseData = responseData
        };
    }

    public ResponseDto NotFound(string messageToClient, string errorMessage)
    {
        _httpContextAccessor.HttpContext.Response.StatusCode = StatusCodes.Status404NotFound;

        return new ResponseDto(messageToClient)
        {
            ErrorMessage = errorMessage
        };
    }

    public ResponseDto InternalServerError(string messageToClient, string errorMessage)
    {
        _httpContextAccessor.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;

        return new ResponseDto(messageToClient)
        {
            ErrorMessage = errorMessage
        };
    }
}
