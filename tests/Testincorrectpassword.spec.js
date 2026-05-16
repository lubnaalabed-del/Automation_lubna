import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.arabtherapy.com/ar');
  await page.getByRole('link', { name: 'تسجيل الدخول' }).first().click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('lubna.alabed+1882@arabtherapy.com');
  await page.getByTestId('login-email').press('Tab');
  await page.getByTestId('login-password').fill('1234@Lubna');
  await page.waitForTimeout(1000);
  await page.getByTestId('login-submit').first().click();
  console.log(await page.getByText('البريد الإلكتروني أو كلمة المرور غير صحيحة'))
  await page.getByRole('link', { name: 'هل نسيت كلمة المرور؟' }).click();
  await page.getByTestId('forgot-password-email').fill('lubna.alabed+1882@arabtherapy.com');
  await page.getByTestId('forgot-password-reset').click();
 
  });
