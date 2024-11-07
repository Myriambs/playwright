import { test, expect } from "@playwright/test";

test('HomePage has playwright in title and get started link linking to the intro page', async ({ page }) => {
  // Use page.goto to navigate to the URL
  await page.goto('https://playwright.dev/');

  // Check that the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  const getStarted = page.locator('text=Get Started');
  
  // Verify that the 'Get Started' link has the correct href attribute
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the 'Get Started' link and check the URL
  await getStarted.click();
  await expect(page).toHaveURL(/.*intro/);

  // Close the page
  await page.close();
});
