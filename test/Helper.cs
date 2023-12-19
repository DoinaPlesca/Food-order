using api.TransferModel;
using Dapper;
using infrastructure.DataModels;
using Npgsql;

namespace test;

public static class Helper
{
    public static readonly NpgsqlDataSource DataSource;
    public static readonly string BaseUrl = "http://localhost:5000";
    public static readonly string ApiBaseUrl = "http://localhost:5000/api/restaurant";

    static Helper()
    {
        var envVarKeyName = "pgconn";

        var rawConnectionString = Environment.GetEnvironmentVariable(envVarKeyName)!;
        if (rawConnectionString == null)
        {
            throw new Exception($@"
YOUR CONN STRING PGCONN IS EMPTY.
Solution: Go to Settings, search for Test Runner, and add the environment variable in there.
Currently, your program looks for an environment variable is called {envVarKeyName}.

Best regards, Alex

");
        }

        try
        {
            var uri = new Uri(rawConnectionString);
            var properlyFormattedConnectionString = string.Format(
                "Server={0};Database={1};User Id={2};Password={3};Port={4};Pooling=false;",
                uri.Host,
                uri.AbsolutePath.Trim('/'),
                uri.UserInfo.Split(':')[0],
                uri.UserInfo.Split(':')[1],
                uri.Port > 0 ? uri.Port : 5432);
            DataSource =
                new NpgsqlDataSourceBuilder(properlyFormattedConnectionString).Build();
            DataSource.OpenConnection().Close();
        }
        catch (Exception e)
        {
            throw new Exception($@"

Your connection string is found, but could not be used. Are you sure you correctly inserted
the connection-string to Postgres?
", e);
        }
    }


    public static string BadResponseBody(string content)
    {
        return $@"

Hey buddy, I've tried to take the response body from the API and turn into a class object,
but that failed. Below is what you sent me + the inner exception.

Best regards, Alex
RESPONSE BODY: {content}

EXCEPTION:
";
    }

    public static void TriggerRebuild()
    {
        using (var conn = DataSource.OpenConnection())
        {
            try
            {
                conn.Execute(RebuildScript);
            }
            catch (Exception e)
            {
                throw new Exception($@"
THERE WAS AN ERROR REBUILDING THE DATABASE.

Check the following: Are you running the postgres DB at Amazon Web Services in Stockholm?

Best regards, Alex.
(Below is the inner exception)", e);
            }
        }
    }

    
    
    
    
    
    
    
    
    
    
    
    
    


    public static string RebuildScript = @"
DROP SCHEMA IF EXISTS food_order CASCADE;
CREATE SCHEMA food_order;

CREATE TABLE food_order.category
(
    categoryid       serial primary key,
    categoryname     varchar(255) not null,
    categoryimageurl text
);

CREATE TABLE food_order.product
(
    id          serial PRIMARY KEY,
    name        varchar(255) NOT NULL,
    description text,
    price       numeric(18, 2) NOT NULL,
    quantity    integer,
    image_url   text,
    category_id integer REFERENCES food_order.category ON DELETE CASCADE
);

CREATE TABLE food_order.user_table
(
    id        serial PRIMARY KEY,
    username  varchar(255) NOT NULL UNIQUE,
    email     varchar(255) NOT NULL UNIQUE,
    password  varchar(255) NOT NULL,
    salt      varchar(255) NOT NULL,
    algorithm varchar(255) NOT NULL,
    role      varchar(255) NOT NULL
);
";
}