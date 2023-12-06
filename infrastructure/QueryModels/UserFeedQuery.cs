namespace infrastructure.QueryModels;

public class UserFeedQuery
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Username { get; set; }
    public string Mobile { get; set; }
    public string Email_address { get; set; }
    public string Postcode { get; set; }
    public string Password { get; set; }
    public string Image_url { get; set; }
    public DateTime Create_date { get; set; }
}