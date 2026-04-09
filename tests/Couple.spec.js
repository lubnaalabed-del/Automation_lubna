import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  //Couple therapy / Hope package / paymob card
  await page.getByRole('button', { name: 'ابدأ الآن' }).nth(2).first().click();
  await page.getByTestId('prefer-to-attend-the-sessions-together-1').first().click();
  await page.getByTestId('relationship-status-1').first().click();
  await page.getByTestId('current-relationship-duration-1').first().click();
  await page.getByTestId('who-requested-the-therapy-3').first().click();
  await page.locator('#slide-main-challenges > .slide-body > .multi-select-list > div > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.getByTestId('main-challenges-next-btn').first().click();
  await page.getByTestId('previously-sought-couples-therapy-2').first().click();
  await page.locator('label').filter({ hasText: 'تقوية العلاقة' }).first().click();
  await page.getByTestId('main-goal-couples-therapy-next-btn').first().click();
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
  await page.waitForSelector('text=ابدأ الآن');
    //Subscription
  await page.waitForSelector('text=ابدأ الآن');
  await page.getByTestId('subscription-plan-start-btn-2').first().click();
  await page.locator('.radio-btn').first().click();
  await page.getByRole('button', { name: 'اشترك الآن' }).click();
  await page.getByRole('textbox', { name: 'Card Number' }).fill('5123456789012346');
  await page.getByRole('textbox', { name: 'Card Holder Name' }).fill('Test Account');
  await page.getByRole('textbox', { name: 'Exp. Month' }).fill('12');
  await page.getByRole('textbox', { name: 'Exp. Year' }).fill('26');
  await page.getByRole('textbox', { name: 'CCV' }).fill('123');
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.waitForTimeout(6000);


  //phone number screen
  await page.getByRole('textbox').fill(`79988${randomDigits}`);
  await page.waitForSelector('text=متابعة');
  await page.getByRole('button', { name: 'متابعة' }).click();
  await page.getByText('سيتم تعيين أخصائي لك خلال 24 ساعة', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Test' }).click();
});
