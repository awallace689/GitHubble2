module GitHubble2.Authorization.Handlers

open System
open System.Runtime.InteropServices
open System.Threading.Tasks
open GitHubble2.Authorization.Requirements
open Microsoft.AspNetCore.Authorization
open System.Linq

type public HasScopeHandler =
  inherit AuthorizationHandler<HasScopeRequirement>

  static member private ValidateScopes(
    context: AuthorizationHandlerContext,
    requirement: HasScopeRequirement
  ) =
    try
      let scopeClaim =
        context.User.FindFirst(
          fun c -> c.Type = "scope" && c.Issuer = requirement.Issuer)
      let scopes = scopeClaim.Value.Split(' ')

      if scopes.Any(fun s -> s = requirement.Scope) then
        do context.Succeed(requirement)

      Task.CompletedTask
    with
    | :? ArgumentNullException -> Task.CompletedTask
    | _ -> reraise()

  override _.HandleRequirementAsync(
    context: AuthorizationHandlerContext,
    requirement: HasScopeRequirement
  ): Task =
      let hasScopeAndIssuer =
        context.User.HasClaim(
          fun c -> c.Type = "scope" && c.Issuer = requirement.Issuer)

      match hasScopeAndIssuer with
      | true ->
          HasScopeHandler.ValidateScopes(context, requirement)
      | false -> Task.CompletedTask

  new() = {}