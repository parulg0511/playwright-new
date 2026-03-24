import { test as base, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// Define types for your custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend base test with your fixture type
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login();
    await use(loginPage);
  },
});