module GitHubble2.Authorization.Requirements

open System
open Microsoft.AspNetCore.Authorization

type public HasScopeRequirement(scope: string, issuer: string) =
    let _issuer =
        if issuer <> null then
            issuer
        else
            raise (ArgumentNullException(issuer))

    let _scope =
        if scope <> null then
            scope
        else
            raise (ArgumentNullException(scope))

    interface IAuthorizationRequirement

    member public _.Issuer = _issuer
    member public _.Scope = _scope
