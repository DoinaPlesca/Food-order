namespace api.TransferModel;

public class ResponseDto
{ 
    public ResponseDto(string messageToClient)
    {
        MessageToClient = messageToClient;
    }

    public ResponseDto()
    {
       
    }

    public string MessageToClient { get; set; }
    public Object? ResponseData { get; set; }
    public string ErrorMessage { get; set; }
}
