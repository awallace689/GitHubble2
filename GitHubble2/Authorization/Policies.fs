module GitHubble2.Authorization.Policies

open GitHubble2.Authorization.Requirements
open Microsoft.AspNetCore.Authorization
open Microsoft.Extensions.Configuration

type Policy = string

let Policies = set<Policy> [ "read:weather" ]

let public GetIssuer (config: IConfiguration) =
    config
        .GetSection("Authentication")
        .GetSection("Schemes")
        .GetSection("Bearer")
        .GetSection("Authority")
        .Value

let public CreateScopeRequirement (policy: Policy, options: AuthorizationOptions, config: IConfiguration) =
    options.AddPolicy(policy, (fun builder -> builder.Requirements.Add(HasScopeRequirement(policy, GetIssuer(config)))))
