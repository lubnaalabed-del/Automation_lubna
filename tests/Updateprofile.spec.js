import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByRole('link', { name: 'تسجيل الدخول' }).first().click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('lubna_automation+1003@gmail.com');
  await page.getByTestId('login-email').press('Tab');
  await page.getByTestId('login-password').fill('1234');
  await page.waitForTimeout(1000);
  await page.getByTestId('login-submit').first().click();
  await page.getByTestId('patient-profile').first().click();
  await page.getByTestId('patient-profile-edit-button').first().click();
  await page.getByTestId('patient-profile-personal-save').first().click();
  await page.getByTestId('patient-profile-edit-button').first().click();
  await page.getByTestId('patient-profile-first-name').click();
  await page.getByTestId('patient-profile-first-name').fill('Testautomation');
  await page.getByTestId('patient-profile-personal-save').first().click();
  await page.getByTestId('patient-appointments').first().click();
  });