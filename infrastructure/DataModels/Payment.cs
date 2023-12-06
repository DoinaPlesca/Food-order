namespace infrastructure.DataModels;

public class Payment
{
    public int Id { get; set; }
    public string Card_name { get; set; }
    public string Card_number { get; set; }
    public DateTime Expire_date { get; set; }
    public string Cvv_number { get; set; }
    public string Delivery_address { get; set; }
    public string Payment_mode { get; set; }
    public DateTime Create_Date { get; set; }
}