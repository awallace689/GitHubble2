namespace GitHubble2

#nowarn "20"

open GitHubble2.Authorization.Handlers
open Microsoft.AspNetCore.Authorization
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Cors.Infrastructure
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open GitHubble2.Authorization.Policies


module Program =
    let exitCode = 0

    let configureCors (origin: string) =
        fun (options: CorsOptions) ->
            options.AddPolicy(
                "AllowUIOrigin",
                fun builder -> do builder.WithOrigins(origin).AllowAnyHeader().AllowAnyMethod()
            )

    [<EntryPoint>]
    let main args =
        let builder = WebApplication.CreateBuilder(args)

        builder.Services.AddControllers()

        let origin = builder.Configuration.GetSection("UIOrigin").Value
        builder.Services.AddCors(configureCors (origin))

        builder.Services.AddAuthentication().AddJwtBearer()

        builder.Services.AddAuthorization(fun options ->
            Policies
            |> Set.iter (fun pol -> CreateScopeRequirement(pol, options, builder.Configuration)))

        do builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>()

        let app = builder.Build()

        if builder.Environment.IsDevelopment() then
            do app.UseDeveloperExceptionPage()

        (*
        // Configure the HTTP request pipeline.
        if not (app.Environment.IsDevelopment()) then
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();

        app.UseHttpsRedirection()
        *)

        app.UseHttpsRedirection()

        app.UseStaticFiles()
        app.UseAuthorization()

        app.MapControllers()

        app.MapFallbackToFile("index.html")

        app.Run()

        exitCode
