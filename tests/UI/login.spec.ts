import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Login UI Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');
  await loginPage.login();

  await expect(page).toHaveURL(/dashboard/);
});