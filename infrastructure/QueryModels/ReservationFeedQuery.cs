namespace infrastructure.QueryModels;

public class ReservationFeedQuery
{ 
    public int Id { get; set; }
    public int Product_id { get; set; }
    public int Quantity { get; set; }
    public int User_id { get; set; }
    public DateTime Create_date { get; set; }


}