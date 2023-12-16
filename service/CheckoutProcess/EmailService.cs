namespace service.CheckoutProcess;

public class EmailService
{
    public async Task SendOrderConfirmationEmail(string userEmail, string orderSummary)
    {
        // Implement logic to compose and send the order confirmation email
        // For demonstration purposes, a simple mock implementation:
        Console.WriteLine($"Sending order confirmation email to {userEmail}.\n\n{orderSummary}");
    }
}