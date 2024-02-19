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

  const pages = [Pages.signIn, Pages.notFound];
  for (const sitePage of pages) {
    test(`${sitePage}`, async ({ page }) => {
      await page.goto(pageUrl(Pages.signIn));
      expect(page.getByText(pageText[sitePage]!)).toBeTruthy();
    });
  }
});

test.describe("navbar is visible", () => {
  test.describe.configure({ mode: "parallel" });

  for (const sitePage of Object.values(Pages)) {
    test(`${sitePage}`, async ({ page }) => {
      await page.goto(pageUrl(Pages.signIn));
      const navbar = page.getByRole("navigation");
      const darkModeSwitch = navbar.getByRole("checkbox");

      expect(navbar).toBeTruthy();
      expect(darkModeSwitch).toBeTruthy();
    });
  }
});
