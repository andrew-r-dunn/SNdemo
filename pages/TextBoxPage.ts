// TextBoxPage.ts
import { Locator, Page } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.locator('role=textbox[name="Full Name"]');
    this.emailInput = page.locator('role=textbox[name="name@example.com"]');
    this.currentAddressInput = page.locator('role=textbox[name="Current Address"]');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('role=button[name="Submit"]');
  }

  async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
