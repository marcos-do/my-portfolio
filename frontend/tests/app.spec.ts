import { test, expect } from '@playwright/test';

const SITE = "http://localhost:3000"

test('has title', async ({ page }) => {
  await page.goto(SITE);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Marcos de Oliveira/);
});
