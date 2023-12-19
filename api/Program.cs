using api.Helper;
using api.Middleware;
using infrastructure;
using infrastructure.Repository;
using Microsoft.Net.Http.Headers;
using service;

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddNpgsqlDataSource(Utilities.ProperlyFormattedConnectionString,
        dataSourceBuilder => dataSourceBuilder.EnableParameterLogging());
}

if (builder.Environment.IsProduction())
{
    builder.Services.AddNpgsqlDataSource(Utilities.ProperlyFormattedConnectionString);
}

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddSingleton<CategoryRepository>();
builder.Services.AddSingleton<CategoryService>();


builder.Services.AddSingleton<ProductRepository>();
builder.Services.AddSingleton<ProductService>();
builder.Services.AddSingleton<ResponseHelper>();

builder.Services.AddSingleton<UserRepository>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<PasswordHasher ,BCryptHashAlgorithm>();



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var frontEndRelativePath = "./../frontend/www/";

builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "./../frontend/www/"; });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
});
 
var app = builder.Build();

app.UseRouting();

app.UseCors("AllowOrigin");


// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(options =>
{
    options.SetIsOriginAllowed(origin => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
});

app.UseSpaStaticFiles(new StaticFileOptions()
{
    OnPrepareResponse = ctx =>
    {
        const int durationInSeconds = 60 * 60 * 24;
        ctx.Context.Response.Headers[HeaderNames.CacheControl] =
            "public,max-age=" + durationInSeconds;
    }
});

app.Map("/frontend",
    (IApplicationBuilder frontendApp) => { frontendApp.UseSpa(spa => { spa.Options.SourcePath = "./app/www/"; }); });


app.UseSpaStaticFiles();
app.UseSpa(conf =>
{
    conf.Options.SourcePath = frontEndRelativePath;
});

app.UseMiddleware<GlobalExceptionHandler>();

app.MapControllers();


app.Run();