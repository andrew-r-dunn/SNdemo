// CheckBoxPage.ts
import { Locator, Page } from '@playwright/test';

export class CheckBoxPage {
  readonly page: Page;
  readonly expandAllButton: Locator;
  readonly homeCheckBoxLabel: Locator;
  readonly wordFileCheckBoxLabel: Locator;
  readonly veuCheckBoxLabel: Locator;
  readonly radioButtonText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandAllButton = page.locator('role=button[name="Expand all"]');
    this.homeCheckBoxLabel = page.locator('label:has-text("Home")');
    this.wordFileCheckBoxLabel = page.locator('label:has-text("Word File.doc")');
    this.veuCheckBoxLabel = page.locator('label:has-text("Veu")');
    this.radioButtonText = page.locator('text=Radio Button');
  }

  async expandAll() {
    await this.expandAllButton.click();
  }

  async selectHomeCheckBox() {
    await this.homeCheckBoxLabel.locator('role=img').first().click();
  }

  async selectWordFileCheckBox() {
    await this.wordFileCheckBoxLabel.locator('role=img').first().click();
  }

  async selectVeuCheckBox() {
    await this.veuCheckBoxLabel.locator('role=img').first().click();
  }

  async clickRadioButton() {
    await this.radioButtonText.click();
  }
}
