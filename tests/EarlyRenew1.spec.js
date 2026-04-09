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
  
  await page.getByText('ادفع بأمان واحجز اول موعد', { exact: true }).click();
  await page.getByTestId('subscription-plan-start-btn-1').first().click();
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
  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();

  //Login by admin
  await page.getByRole('link', { name: 'تسجيل الدخول' }).first().click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('admin@admin.com');
  await page.getByTestId('login-email').press('Tab');
  await page.getByTestId('login-password').fill('1234');
  await page.waitForTimeout(1000);
  await page.getByTestId('login-submit').first().click();
  await page.getByRole('textbox', { name: '-' }).first().fill('1');
  await page.getByRole('textbox', { name: '-' }).nth(1).fill('2');
  await page.getByRole('textbox', { name: '-' }).nth(2).fill('3');
  await page.getByRole('textbox', { name: '-' }).nth(3).fill('4');

  await page.getByRole('link', { name: 'العملاء', exact: true }).first().click();
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).click();
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).fill(randomEmail);
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).press('Enter');
    // Wait for the "تعيين" button to be visible and enabled before clicking
  await page.waitForSelector('button:has-text("تعيين")', { state: 'visible', timeout: 20000 });
  await page.getByRole('button', { name: 'تعيين' }).first().click();
  await page.getByRole('textbox', { name: 'الأخصائي' }).click();
  await page.getByRole('textbox', { name: 'الأخصائي' }).fill('Anne Gee');
  await page.getByRole('option', { name: 'Anne Gee' }).locator('span').click();
  await page.getByRole('button', { name: 'حفظ' }).click();
  await page.getByText('Super Admin').first().click();
  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();
  await page.getByRole('link', { name: 'تسجيل الدخول' }).first().click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill(randomEmail);
  await page.getByTestId('login-email').press('Tab');
  await page.getByTestId('login-password').fill('1234@Lubna');
  await page.getByTestId('login-submit').first().click();
  await page.waitForTimeout(1000);
   await page.getByTestId('patient-appointments').first().click();
  await page.getByTestId('book-appointment-btn').first().click();
  const button = page.locator('button.v-btn.v-btn--block[style*="background-color: rgb(69, 127, 127)"]');
  // Retry booking if slot is not available
  let bookingSuccess = false;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const dayPicker = page.locator('.v-date-picker-table');
      const firstActiveDay = dayPicker.locator('button:not([disabled])').first();
      await firstActiveDay.click();
      const firstAppointment = page.locator('.times .time').first();
      await firstAppointment.click();
      await page.getByRole('button', { name: 'فيديو' }).click();
      await page.waitForTimeout(1000);
      await button.click();

      await page.waitForSelector('text=تم حجز الموعد بنجاح', { timeout: 7000 });
      await page.getByText('تم حجز الموعد بنجاح').click();
      bookingSuccess = true;
      break;
    } catch (e) {
      // Check for unavailable slot message and retry
      const unavailable = await page.locator('text=لم يعد الموعد متوفرًا، يرجى اختيار موعد آخر').isVisible();
      if (unavailable) {
        await page.getByRole('button', { name: 'Ok' }).click();
        // Try next available appointment
        const nextAppointment = page.locator('.times .time').nth(attempt + 1);
        await nextAppointment.click();
        await button.click();
      } else {
        throw e;
      }
    }
  }
  if (!bookingSuccess) {
    throw new Error('Failed to book an appointment after multiple attempts');
  }


  await page.getByTestId('book-appointment-btn').first().click();
  
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const dayPicker = page.locator('.v-date-picker-table');
      const firstActiveDay = dayPicker.locator('button:not([disabled])').first();
      await firstActiveDay.click();
      const firstAppointment = page.locator('.times .time').first();
      await firstAppointment.click();
      await page.getByRole('button', { name: 'فيديو' }).click();
      await page.waitForTimeout(1000);
      await button.click();

      await page.waitForSelector('text=تم حجز الموعد بنجاح', { timeout: 7000 });
      await page.getByText('تم حجز الموعد بنجاح').click();
      bookingSuccess = true;
      break;
    } catch (e) {
      // Check for unavailable slot message and retry
      const unavailable = await page.locator('text=لم يعد الموعد متوفرًا، يرجى اختيار موعد آخر').isVisible();
      if (unavailable) {
        await page.getByRole('button', { name: 'Ok' }).click();
        // Try next available appointment
        const nextAppointment = page.locator('.times .time').nth(attempt + 1);
        await nextAppointment.click();
        await button.click();
      } else {
        throw e;
      }
    }
  }
  if (!bookingSuccess) {
    throw new Error('Failed to book an appointment after multiple attempts');
  }


});