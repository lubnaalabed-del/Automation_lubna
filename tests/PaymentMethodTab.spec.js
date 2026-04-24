import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  //Individual therapy / copoun & at+ 
  await page.getByTestId('individual-therapy-card').getByRole('button', { name: 'ابدأ الآن' }).click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(2) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.getByTestId('what-brought-you-next-btn').first().click();
  await page.locator('#slide-recently-symptoms > .slide-body > .multi-select-list > div:nth-child(9) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.getByTestId('recently-symptoms-next-btn').first().click();
  await page.getByTestId('have-treatment-before-2').first().click();
  await page. getByTestId('age-input').fill('25');
  await page.getByTestId('age-next-btn').first().click();
  await page.getByTestId('gender-1').first().click();
  await page.getByTestId('country-id-autocomplete').click();
  await page.getByTestId('country-option-united-arab-emirates').click();
  await page.getByTestId('country-id-next-btn').first().click();
  await page.getByTestId('preferred-therapist-gender-1').first().click();
  await page.getByTestId('are-you-religious-1').first().click();
  await page.getByTestId('family-history-of-psychological-problems-1').first().click();
  await page.getByTestId('suffer-physical-health-problems-1').first().click();
  await page.getByTestId('patient-preferred-contact-method-1').first().click();
  await page.getByTestId('how-did-you-hear-about-us-2').first().click();

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

  //Subscription with AT+ & coupon
  
  await page.getByText('ادفع بأمان واحجز اول موعد', { exact: false }).click();
  await page.getByTestId('subscription-plan-start-btn-1').first().click();
  await page.getByTestId('coupon-field').click();
  await page.getByTestId('coupon-field').fill('loyal');
  await page.getByTestId('apply-coupon-btn').click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.locator('#payment-option-stripe > .payment-label > .radio-btn').click();

  // Card Number 
  const cardNumberFrame = page.frameLocator(
  'iframe[title="Secure card number input frame"]:visible'
  );

  await cardNumberFrame
  .getByRole('textbox')
  .fill('5555 5555 5555 4444');

  // Expiry Date
  const expiryFrame = page.frameLocator(
  'iframe[title="Secure expiration date input frame"]:visible'
  );

  await expiryFrame
  .getByRole('textbox')
  .fill('12 / 30');

  // CVC
  const cvcFrame = page.frameLocator(
  'iframe[title="Secure CVC input frame"]:visible'
  );

  await cvcFrame
  .getByRole('textbox')
  .fill('333');

  await page.getByRole('button', { name: 'اشترك الآن' }).first().click();
  await page.waitForTimeout(6000);

  //phone number screen
  await page.getByRole('textbox').fill(`79988${randomDigits}`);
  await page.waitForSelector('text=متابعة');
  await page.getByRole('button', { name: 'متابعة' }).click();
  await page.getByText('سيتم تعيين أخصائي لك خلال 24 ساعة', { exact: true }).click();
  await page.locator('span').filter({ hasText: 'Test' }).click();

  //Add new payment method
  await page.getByTestId('payment-methods').click();
  await page.getByTestId('add-new-payment-method-btn').click();

  page.frameLocator(
  'iframe[title="Secure card number input frame"]:visible'
  );

  await cardNumberFrame
  .getByRole('textbox')
  .fill('4242 4242 4242 4242');

  // Expiry Date
   page.frameLocator(
  'iframe[title="Secure expiration date input frame"]:visible'
  );

  await expiryFrame
  .getByRole('textbox')
  .fill('12 / 30');

  // CVC
   page.frameLocator(
  'iframe[title="Secure CVC input frame"]:visible'
  );

  await cvcFrame
  .getByRole('textbox')
  .fill('333');

await page.getByTestId('add-payment-method-btn').click();
await page.getByTestId('default-payment-method-btn-1').click();
await page.getByTestId('delete-payment-method-btn-2').click();
await page.getByRole('button', { name: 'نعم' }).click();

//Settings
await page.getByTestId('settings').click();
await page.waitForTimeout(1000);
await page.getByTestId('email-session-reminders-toggle').click();
await page.getByTestId('email-session-subscription-toggle').click();
await page.getByTestId('whatsapp-session-reminders-toggle').click();
await page.getByTestId('whatsapp-session-subscription-toggle').click();
  
});


