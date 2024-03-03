module GitHubble2.Tests.Authorization.Handlers.HasScopeHandler

#nowarn "20"

open System.Security.Claims
open GitHubble2.Authorization.Handlers
open GitHubble2.Authorization.Requirements
open Microsoft.AspNetCore.Authorization
open NUnit.Framework

[<Literal>]
let Scope = "scope"

[<Literal>]
let private Issuer = "issuer"

[<TestFixture>]
[<Parallelizable(ParallelScope.All)>]
type public HasScopeHandlerTests() =
    static member GetClaimsPrincipal(claims: Claim[]) = ClaimsPrincipal(ClaimsIdentity(claims))

    static member GetAuthorizationHandlerContext(claims: Claim[]) =
        AuthorizationHandlerContext(
            [| HasScopeRequirement(Scope, Issuer) |],
            HasScopeHandlerTests.GetClaimsPrincipal(claims),
            null
        )

    [<Test>]
    member _.HandleRequirementAsync_HasCorrectScopeAndIssuer_Succeeds() =
        let context =
            HasScopeHandlerTests.GetAuthorizationHandlerContext([| Claim("scope", Scope, null, Issuer) |])

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.True)

    [<Test>]
    member _.HandleRequirementAsync_MissingClaims_DoesNotThrowException() =
        let context = HasScopeHandlerTests.GetAuthorizationHandlerContext([||])

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.False)

    [<Test>]
    member _.HandleRequirementAsync_MissingScopeClaim_DoesNotThrowException() =
        let context =
            HasScopeHandlerTests.GetAuthorizationHandlerContext([| Claim("not_scope", Scope, null, Issuer) |])

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.False)

    [<Test>]
    member _.HandleRequirementAsync_BadScopeIssuer_FailsWithoutException() =
        let claims =
            [| Claim("scope", Scope, null, "bad_issuer")
               Claim("scope", Scope, null, null) |]

        for claim in claims do
            let context = HasScopeHandlerTests.GetAuthorizationHandlerContext([| claim |])

            let handler = HasScopeHandler()
            task { do! handler.HandleAsync(context) }

            Assert.That(context.HasSucceeded, Is.False)

    [<Test>]
    member _.HandleRequirementAsync_BadScope_FailsWithoutException() =
        let claims =
            [| Claim("scope", "bad_scope", null, Issuer)
               Claim("scope", "", null, Issuer) |]

        for claim in claims do
            let context = HasScopeHandlerTests.GetAuthorizationHandlerContext([| claim |])

            let handler = HasScopeHandler()
            task { do! handler.HandleAsync(context) }

            Assert.That(context.HasSucceeded, Is.False)

    [<Test>]
    member _.HandleRequirementAsync_MultipleBadScopes_FailsWithoutException() =
        let context =
            HasScopeHandlerTests.GetAuthorizationHandlerContext(
                [| Claim("scope", "bad_scope bad_scope2", null, Issuer) |]
            )

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.False)

    [<Test>]
    member _.HandleRequirementAsync_MultipleGoodScopes_Succeeds() =
        let context =
            HasScopeHandlerTests.GetAuthorizationHandlerContext([| Claim("scope", Scope + " " + Scope, null, Issuer) |])

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.True)

    [<Test>]
    member _.HandleRequirementAsync_MixedScopes_Succeeds() =
        let context =
            HasScopeHandlerTests.GetAuthorizationHandlerContext(
                [| Claim("scope", Scope + " bad_scope", null, Issuer) |]
            )

        let handler = HasScopeHandler()
        task { do! handler.HandleAsync(context) }

        Assert.That(context.HasSucceeded, Is.True)