// FormPage.ts
import { Locator, Page } from '@playwright/test';

export class FormPage {
  private page: Page;
  private practiceFormLocator: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private genderMaleRadioButton: Locator;
  private mobileNumberInput: Locator;
  private dateOfBirthInput: Locator;
  private yearSelect: Locator;
  private daySelect: Locator;
  private subjectsInput: Locator;
  private fileInput: Locator;
  private currentAddressInput: Locator;
  private stateDropdown: Locator;
  private cityDropdown: Locator;
  private submitButton: Locator;
  private uploadedFileCell: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceFormLocator = page.locator('//span[text()="Practice Form"]');
    this.firstNameInput = page.locator('#userName-wrapper > div:nth-child(2)');
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
    this.genderMaleRadioButton = page.getByText('Male', { exact: true });
    this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile Number' });
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.yearSelect = page.getByRole('combobox').nth(1);
    this.daySelect = page.getByRole('option', { name: 'Choose Wednesday, March 15th,' });
    this.subjectsInput = page.locator('.subjects-auto-complete__value-container');
    this.fileInput = page.getByRole('textbox', { name: 'Select picture' });
    this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
    this.stateDropdown = page.locator('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer');
    this.cityDropdown = page.locator('div').filter({ hasText: /^Select City$/ }).nth(3);
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.uploadedFileCell = page.getByRole('cell', { name: 'Test Pic 1.jpg' });
  }



  // Fill out the form fields
  async fillForm(firstName: string, lastName: string, email: string, mobile: string, currentAddress: string) {
    await this.practiceFormLocator.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.genderMaleRadioButton.click();
    await this.mobileNumberInput.fill(mobile);
    await this.dateOfBirthInput.click();
    await this.yearSelect.selectOption({ label: '2000' });
    await this.daySelect.click();
    await this.subjectsInput.click();
    await this.page.locator('#subjectsInput').fill('b');
    await this.page.getByText('Biology', { exact: true }).click();
    await this.page.getByText('Sports').click();
    await this.page.getByText('Reading').click();
    await this.fileInput.setInputFiles('Test Pic 1.jpg');
    await this.currentAddressInput.fill(currentAddress);
  }

  // Select state and city
  async selectStateAndCity() {
    await this.stateDropdown.click();
    await this.page.getByText('Uttar Pradesh', { exact: true }).click();
    await this.cityDropdown.click();
    await this.page.getByText('Lucknow', { exact: true }).click();
  }

  // Submit the form
  async submitForm() {
    await this.submitButton.click();
  }

  // Click on uploaded file cell
  async clickUploadedFile() {
    await this.uploadedFileCell.click();
  }

  
}
