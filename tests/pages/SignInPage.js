import { expect } from '@playwright/test';

export class SignInPage {
  constructor(page) {
    this.page = page;
    this.modalHeading = page.getByRole('heading', { name: 'Sign In' });
    this.closeBtn = page.locator('button.close-btn'); 
  }

  async verifyVisible() {
    await expect(this.modalHeading).toBeVisible();
  }

  async close() {
    await this.closeBtn.click();
  }
}
