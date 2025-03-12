// test.ts
import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { CheckBoxPage } from '../pages/CheckBoxPage';
import { FormPage } from '../pages/FormPage';

test('Testing the textbox', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await page.goto('https://demoqa.com/text-box');
  await page.locator('role=list').locator('text=Text Box').click();
  
  await textBoxPage.fillForm('Jen QA', 'test@test.com', 'Manchester', 'Wales');
  await textBoxPage.submitForm();
});

  
test('Testing the checkbox and radio button', async ({ page }) => {
  const checkBoxPage = new CheckBoxPage(page);

  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
  
  await page.locator('role=listitem').filter({ hasText: 'Check Box' }).click();
  await checkBoxPage.expandAll();
  await checkBoxPage.selectHomeCheckBox();
  await checkBoxPage.selectWordFileCheckBox();
  await checkBoxPage.selectVeuCheckBox();
  await checkBoxPage.clickRadioButton();
  
  await page.locator('text=Web Tables').click();
});


test('Testing the form page ', async ({ page }) => {
    const formPage = new FormPage(page);
  
    await page.goto('https://demoqa.com/automation-practice-form');
  
    await formPage.fillForm('Andy', 'Dunn', 'andy@gmail.com', '0749789898', 'Manchester');
    await formPage.selectStateAndCity();
    await formPage.submitForm();
  
    // Optionally verify if the file is uploaded
    await formPage.clickUploadedFile();
  });