﻿namespace infrastructure.DataModels;

public class User
{
    public int id { get; set; }
    public string? username { get; set; }
    public string? email { get; set; }
    public string? password { get; set; }
    public string? salt { get; set; }
    
    public string? algorithm { get; set; }
    public string? role { get; set; }
}