// WebTablesPage.ts
import { Locator, Page } from '@playwright/test';

export class WebTablesPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('role=button[name="Add"]');
    this.firstNameInput = page.locator('role=textbox[name="First Name"]');
    this.lastNameInput = page.locator('role=textbox[name="Last Name"]');
    this.emailInput = page.locator('role=textbox[name="name@example.com"]');
    this.ageInput = page.locator('role=textbox[name="Age"]');
    this.salaryInput = page.locator('role=textbox[name="Salary"]');
    this.departmentInput = page.locator('role=textbox[name="Department"]');
    this.submitButton = page.locator('role=button[name="Submit"]');
  }

  async addNewUser(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    await this.firstNameInput.waitFor({ state: 'visible' });  // Ensure the field is visible
    await this.firstNameInput.fill(firstName);
    
    await this.lastNameInput.waitFor({ state: 'visible' });
    await this.lastNameInput.fill(lastName);
    
    await this.emailInput.waitFor({ state: 'visible' });
    await this.emailInput.fill(email);
    
    await this.ageInput.waitFor({ state: 'visible' });
    await this.ageInput.fill(age);
    
    await this.salaryInput.waitFor({ state: 'visible' });
    await this.salaryInput.fill(salary);
    
    await this.departmentInput.waitFor({ state: 'visible' });
    await this.departmentInput.fill(department);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
