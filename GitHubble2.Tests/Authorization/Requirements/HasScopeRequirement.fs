module GitHubble2.Tests.Authorization.HasScopeRequirement

#nowarn "20"

open System
open GitHubble2.Authorization.Requirements
open NUnit.Framework

let private NotNullScope = "scope"
let private NotNullIssuer = "issuer"

[<TestFixture>]
[<Parallelizable(ParallelScope.All)>]
type public HasScopeRequirementTests() =

    [<Test>]
    [<TestCase("scope", null)>]
    [<TestCase(null, "issuer")>]
    [<TestCase(null, null)>]
    member _.HasScopeRequirement_NullParams_ThrowsArgumentNullException(scope: string, issuer: string) =
        do Assert.Throws<ArgumentNullException>(fun () -> do HasScopeRequirement(scope, issuer))

    [<Test>]
    member _.HasScopeRequirement_ValidParams_ObjectHasValidProperties() =
        let req = HasScopeRequirement(NotNullScope, NotNullIssuer)

        Assert.That(req, Has.Property("Scope").EqualTo(NotNullScope))
        Assert.That(req, Has.Property("Issuer").EqualTo(NotNullIssuer))