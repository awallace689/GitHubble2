module GitHubble2.Authorization.Policies

open GitHubble2.Authorization.Requirements
open Microsoft.AspNetCore.Authorization
open Microsoft.AspNetCore.Builder

let private getIssuer(builder: WebApplicationBuilder) =
  builder.Configuration
     .GetSection("Authentication")
     .GetSection("Schemes")
     .GetSection("Bearer")
     .GetSection("Authority")
     .Value

let public addWeatherPolicy(options: AuthorizationOptions, builder: WebApplicationBuilder) =
  let scope = "read:weather"
  do options.AddPolicy(
    scope,
    fun policy -> policy.Requirements.Add(
      HasScopeRequirement(
        scope,
        getIssuer(builder))))