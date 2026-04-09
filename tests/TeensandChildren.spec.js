import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  //Teens&Children therapy
  await page.getByRole('button', { name: 'ابدأ الآن' }).nth(3).first().click();
  await page.getByTestId('child-gender-1').first().click();
  await page.getByTestId('child-age-input').fill('10');
  await page.getByTestId('child-age-next-btn').first().click();
  await page.getByTestId('has-child-experienced-recent-major-life-changes-1').first().click();
  await page.getByTestId('has-child-learning-difficulties-1').first().click();
  await page.getByTestId('has-child-difficulty-making-friends-1').first().click();
  await page.getByTestId('is-child-aggressive-and-frequent-tantrums-1').first().click();
  await page.getByTestId('is-child-depressed-or-sad-or-has-isolation-1').first().click();
  await page.getByTestId('has-child-difficulty-sleeping-or-nightmares-1').first().click();
  await page.getByTestId('preferred-therapist-gender-1').first().click();
  await page.getByTestId('country-id-autocomplete').click();
  await page.getByTestId('country-option-united-arab-emirates').click();
  await page.getByTestId('country-id-next-btn').first().click();
  await page.getByTestId('how-did-you-hear-about-us-2').first().click();
  await page.getByTestId('patient-preferred-contact-method-1').first().click();
    //Registration
  const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();
  const randomEmail = `lubna_automation+${randomDigits}@gmail.com`;
  const password = '1234@Lubna';
  await page.getByTestId('register-first-name').click();
  await page.getByTestId('register-first-name').fill('Test');
  await page.getByTestId('register-first-name').press('Tab');
  await page.getByTestId('register-last-name').fill(`${randomDigits}`);
  await page.getByTestId('register-email').click();
  await page.getByTestId('register-email').fill(randomEmail);
  await page.getByTestId('register-email').press('Tab');
  await page.getByTestId('register-password').fill(password);
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.waitForTimeout(1000);
  await page.getByTestId('register-submit').click();
  //Subscription
  await page.waitForSelector('text=ابدأ الآن');
  await page.getByTestId('subscription-plan-start-btn-1').first().click();
  await page.locator('#payment-option-paymob-wallets > .payment-label > .radio-btn').click();
  await page.getByRole('textbox', { name: 'رقم الهاتف' }).fill('01010101010');
  await page.getByRole('button', { name: 'اشترك الآن' }).click();
  await page.locator('#userPin').fill('123456');
  await page.locator('#userOTP').fill('123456');
  await page.getByRole('button', { name: 'Pay with Wallet' }).click();
   
  
  await page.waitForTimeout(6000);

  //phone number screen
  await page.getByRole('textbox').fill(`79988${randomDigits}`);
  await page.waitForSelector('text=متابعة');
  await page.getByRole('button', { name: 'متابعة' }).click();
  await page.getByText('سيتم تعيين أخصائي لك خلال 24 ساعة', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Test' }).click();
  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();

  
});