namespace service.CheckoutProcess;

public class OrderService
{
    private readonly EmailService _emailService;

    public OrderService(EmailService emailService)
    {
        _emailService = emailService;
    }

    public async Task<string> PlaceOrderAsync(Dictionary<int, int> cartItems, string userEmail)
    {
        try
        {
            // Implement your logic to process the order
            // For example, you might calculate the total price and generate an order summary

            var orderSummary = GenerateOrderSummary(cartItems);

            // Now, send the order confirmation email
            await _emailService.SendOrderConfirmationEmail(userEmail, orderSummary);

            return "Order placed successfully";
        }
        catch (Exception ex)
        {
            // Handle any exceptions that might occur during order processing
            // Log the error or perform additional actions as needed

            throw new ApplicationException("Failed to process the order", ex);
        }
    }

    private string GenerateOrderSummary(Dictionary<int, int> cartItems)
    {
        // Implement logic to generate the order summary
        // For demonstration purposes, a simple mock implementation:
        var orderSummary = "Order Summary:\n";
        foreach (var (productId, quantity) in cartItems)
        {
            // You might retrieve product details (name, price) based on the productId
            // For simplicity, let's assume each product has a fixed price
            var productName = $"Product {productId}";
            var totalPrice = quantity * 10; // Replace 10 with the actual product price

            orderSummary += $"{productName} x{quantity}: ${totalPrice}\n";
        }

        return orderSummary;
    }

}