using System.ComponentModel.DataAnnotations;

namespace api.CustomDataAnnotation;

public class ValueIsOneOff : ValidationAttribute
{
    private readonly string[] _validStrings;
    private readonly string? _errorMessage;

    public ValueIsOneOff(string[] validStrings, string? errorMessage = "")
    {
        _validStrings = validStrings;
        _errorMessage = errorMessage;
    }

    protected override ValidationResult IsValid(object? givenString, ValidationContext validationContext)
    {
        if (!_validStrings.Contains(givenString))
        {
            return new ValidationResult(_errorMessage);
        }

        return ValidationResult.Success!;
    }
}