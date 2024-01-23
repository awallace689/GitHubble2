namespace GitHubble2

#nowarn "20"

open System
open System.Collections.Generic
open System.IO
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.AspNetCore.HttpsPolicy
open Microsoft.Extensions.Configuration
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open Microsoft.Extensions.Logging

module Program =
    let exitCode = 0

    [<EntryPoint>]
    let main args =
        let builder = WebApplication.CreateBuilder(args)

        builder.Services.AddControllers()

        let app = builder.Build()

        if (builder.Environment.IsDevelopment()) then
            app.UseDeveloperExceptionPage() |> ignore

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