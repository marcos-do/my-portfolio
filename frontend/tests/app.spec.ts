import { test, expect } from '@playwright/test';
import { fail } from 'assert';

test('has title', async ({ page }) => {
  if (!process.env.FRONTEND_HOST) {
    return fail("No host");
  }
  await page.goto(process.env.FRONTEND_HOST);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Marcos de Oliveira/);
});
