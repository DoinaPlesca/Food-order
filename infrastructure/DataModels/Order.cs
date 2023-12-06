namespace infrastructure.DataModels;

public class Order
{
    public int Id { get; set; }
    public string OrderNumber { get; set; }
    public int? ProductId { get; set; }
    public int Quantity { get; set; }
    public int? UserId { get; set; }
    public string Status { get; set; }
    public int? PaymentId { get; set; }
    public DateTime? OrderDate { get; set; }
}
