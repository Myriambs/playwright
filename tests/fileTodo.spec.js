

import { test, expect } from "@playwright/test";

test('look for a fill input on a todo website', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    
    // Click on the input field with placeholder "What needs to be done?"
    await page.locator('input[placeholder="What needs to be done?"]').click();
    
    // Fill in the input field
    await page.locator('input[placeholder="What needs to be done?"]').fill('new-Todo');
    
    // Press 'Enter' to submit the new todo
    await page.locator('input[placeholder="What needs to be done?"]').press('Enter');
    
    // Check the first checkbox (not nth(1) because nth(1) is the second checkbox)
    await page.locator('input[type="checkbox"]').first().check();
});
