namespace service;

public class JwtOptions
{// JWT configuration..jwtServiceExtension
    public required byte[] Secret { get; init; }
    public required TimeSpan Lifetime { get; init; }
    public string? Address { get; set; }

}