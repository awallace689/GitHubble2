import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:5173";
const signinUrl = "/signin";

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);
});

test.describe("navbar brand redirects to /signin", () => {
  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/GitHubble/);
  });

  const brandElems = [
    { desc: "brand text", testId: "navbar-brand-text" },
    { desc: "brand img", testId: "navbar-brand-logo" },
  ];
  for (const elem of brandElems) {
    test(`${elem.desc} navigates to /signin`, async ({ page }) => {
      await page.goto(baseUrl + "/asdf");
      const brandText = page.getByTestId(elem.testId);
      await brandText.click();

      expect(page.url()).toBe(baseUrl + signinUrl);
    });
  }
});
