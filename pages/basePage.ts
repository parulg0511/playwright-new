// pages/basePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async click(selector: string) {
    await this.page.click(selector);
  }

  // ✅ Updated type() with wait
  async type(selector: string, text: string) {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible', timeout: 30000 }); // wait until visible
    await element.fill('');
    await element.fill("rmgyantra");
  }

  async getText(selector: string) {
    return await this.page.textContent(selector);
  }

  async goto(url: string) {
    await this.page.goto(url);
  }
}