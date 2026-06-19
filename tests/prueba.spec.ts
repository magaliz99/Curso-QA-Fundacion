 import { test, expect } from '@playwright/test';
  test('Buscar QA Testing en Wikipedia', async ({ page }) => {


 await page.goto('https://www.wikipedia.org');
  await page.getByRole('searchbox').fill('Software testing');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/Software_testing/);
 
 });