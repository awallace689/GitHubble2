import { test, expect } from "@playwright/test";
import { Pages, pageUrl, pageText } from "./constants/constants";

test.beforeEach(async ({ page }) => {
  await page.goto(Pages.baseUrl);
});

test.describe("routes are valid", () => {
  test.describe.configure({ mode: "parallel" });

  test("baseUrl redirects to /signin", async ({ page }) => {
    await page.waitForURL(pageUrl(Pages.signIn));
    expect(page.getByText(pageText[Pages.signIn]!)).toBeTruthy();
  });

  test("signin", async ({ page }) => {
    await page.goto(pageUrl(Pages.signIn));
    expect(page.getByText(pageText[Pages.signIn]!)).toBeTruthy();
  });

  test("page not found", async ({ page }) => {
    await page.goto(pageUrl(Pages.notFound));
    expect(page.getByText(pageText[Pages.notFound]!)).toBeTruthy();
  });
});
