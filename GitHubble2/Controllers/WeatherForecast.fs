namespace GitHubble2.Controllers

open System
open Microsoft.AspNetCore.Authorization
open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Logging

[<ApiController>]
[<Route("api/[controller]")>]
type WeatherForecastController(logger: ILogger<WeatherForecastController>) =
    inherit ControllerBase()

    let summaries =
        [| "Freezing"
           "Bracing"
           "Chilly"
           "Cool"
           "Mild"
           "Warm"
           "Balmy"
           "Hot"
           "Sweltering"
           "Scorching" |]

    [<Authorize("read:weather")>]
    [<HttpGet>]
    member _.Get() =
        let rng = System.Random()

        [| for index in 0..4 ->
               {| Date = DateTime.Now.AddDays(float index)
                  TemperatureC = rng.Next(-20, 55)
                  Summary = summaries.[rng.Next(summaries.Length)] |} |]

    [<HttpGet>]
    [<Route("noperms")>]
    [<Authorize>]
    member _.GetNoPerms() =
        let rng = System.Random()

        [| for index in 0..4 ->
               {| Date = DateTime.Now.AddDays(float index)
                  TemperatureC = rng.Next(-20, 55)
                  Summary = summaries.[rng.Next(summaries.Length)] |} |]
