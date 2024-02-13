import { test, expect } from "@playwright/test";
import { Pages, title } from "./constants/constants";

test.describe.configure({ mode: "parallel" });

test.beforeEach(async ({ page }) => {
  await page.goto(Pages.baseUrl);
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(title);
});
