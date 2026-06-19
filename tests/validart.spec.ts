import { test, expect } from '@playwright/test';

test('Buscar Argentina en Wikipedia', async ({ page }) => {

  await page.goto('https://es.wikipedia.org');

  await page.locator('#searchInput').fill('Argentina');

  await page.keyboard.press('Enter');

  await expect(page.locator('#firstHeading'))
    .toContainText('Argentina');

});