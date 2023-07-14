import { test as base, expect } from '@playwright/test';


export type MyOptions = {
  baseUrl: string;
};

export const test = base.extend<MyOptions>({
  baseUrl: '',
  page: async ({ page, baseUrl }, use) => {
    await page.goto(baseUrl);
    await use(page);
  },
});

const baseUrl = 'https://www.homagames.com/';

test.use({ baseUrl });

test('displays a banner on the home page', async ({ page }) => {
  await expect(page).toHaveTitle(/Game the system/);
  await expect(page.getByRole('main')).toContainText('Game The System');
});

test("displays blog posts on the blog page", async ({ page }) => {
await page.getByRole('banner').getByLabel('Navigate to the blog page').click();
await expect(page.getByRole('img').first()).toBeVisible();
});

test("navigates to Homa Lab", async ({ page }) => {
  const pagePromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Enter Homa Lab Enter Homa Lab' }).click();
  const newPage = await pagePromise;
  await expect(newPage.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
  await expect(newPage.getByTestId('login-button')).toBeVisible();
});

test('displays social media links in the footer', async ({ page }) => {
  await page.locator('footer').scrollIntoViewIfNeeded();
  await expect(page.locator('footer [href="https://www.facebook.com/homagames/"]')).toBeVisible();
  await expect(page.locator('footer [href="https://discord.io/homaacademy"]')).toBeVisible();
  await expect(page.locator('footer [href="https://www.tiktok.com/@homagames"]')).toBeVisible();
});


