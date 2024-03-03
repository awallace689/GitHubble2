module GitHubble2.Tests.Authorization.Policies

#nowarn "20"

open GitHubble2.Authorization
open GitHubble2.Tests.TestHelpers
open Microsoft.Extensions.Configuration
open NUnit.Framework

[<TestFixture>]
[<Parallelizable(ParallelScope.All)>]
type public PoliciesTests() =
    static member GetConfiguration() : IConfiguration =
        let builder =
            ConfigurationBuilder().AddJsonFile(GetTestFilePath("test_appsettings.json"))

        builder.Build()

    [<Test>]
    member _.GetIssuer_WithValidConfig_GetsIssuerFromConfig() =
        Assert.That(PoliciesTests.GetConfiguration() |> Policies.GetIssuer, Is.EqualTo("authority"))