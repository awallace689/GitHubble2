module GitHubble2.Authorization.Requirements

open System
open Microsoft.AspNetCore.Authorization

type public HasScopeRequirement(scope: string, issuer: string) =
    interface IAuthorizationRequirement

    member _.Issuer
        with public get() = if issuer <> null then issuer else raise (ArgumentNullException(issuer))
    member _.Scope
        with public get() = if scope <> null then scope else raise (ArgumentNullException(scope))