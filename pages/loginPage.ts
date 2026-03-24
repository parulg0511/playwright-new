import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  username = '#username';
  password = '#inputPassword';
  loginBtn = 'button[type="submit"]';

  async navigate() {
    // Navigate to base URL
    await this.goto('/');  // uses baseURL from playwright.config.ts
  }

  async login() {
    // ✅ Get credentials from .env
    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!;

    // Wait for username field and clear any pre-filled text
    const userField = this.page.locator(this.username);
    await userField.waitFor({ state: 'visible', timeout: 30000 });
    await userField.fill('');        // clear pre-filled username
    await userField.fill("rmgyantra");  // type username

    // Wait for password field AFTER typing username
    const passField = this.page.locator(this.password);
    await passField.waitFor({ state: 'visible', timeout: 30000 });
    await passField.fill("rmgy@9999");  // type password

    // Click login button
    await this.click(this.loginBtn);
  }
}