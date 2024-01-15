using api.Filter;
using api.Helper;
using api.Middleware;
using infrastructure;
using infrastructure.Repository;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Net.Http.Headers;
using Npgsql;
using service;
// create instance
var builder = WebApplication.CreateBuilder(args);

//SETUP LOGGER
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

//SETUP CURRENT hosting Environment

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddNpgsqlDataSource(Utilities.ProperlyFormattedConnectionString,
        dataSourceBuilder => dataSourceBuilder.EnableParameterLogging()); 
}

if (builder.Environment.IsProduction())
{
    builder.Services.AddNpgsqlDataSource(Utilities.ProperlyFormattedConnectionString);
}

//SETUP REPOSITORIES. dependency injection
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddSingleton<CategoryRepository>();
builder.Services.AddSingleton<ProductRepository>();
builder.Services.AddSingleton<UserRepository>();

//NON-API SERVICES
builder.Services.AddSingleton<CategoryService>();
builder.Services.AddSingleton<ProductService>();
builder.Services.AddSingleton<ResponseHelper>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<PasswordHasher ,BCryptHashAlgorithm>();

//MIDDLEWARE
builder.Services.AddCors();
builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "./../frontend/www/"; });
builder.Services.AddScoped<AuthenticationFilter>();

//SETUP OTHER SERVICES
builder.Services.AddControllers();

if (builder.Environment.IsDevelopment())
{
    //FOR SWAGGER / OPENAPI IN DEV MODE
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}

var app = builder.Build();
app.UseCors(options =>
{
    options.SetIsOriginAllowed(origin => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
});


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.UseMiddleware<GlobalExceptionHandler>();


//Testing if run command has correctly passed arguments

app.Services.GetService<UserService>()!.WarningIfSecretIsNotValid();

app.Run();