import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByRole('link', { name: 'تسجيل الدخول' }).first().click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('lubna_automation+5840@gmail.com');
  await page.getByTestId('login-email').press('Tab');
  await page.getByTestId('login-password').fill('1234');
  await page.waitForTimeout(1000);
  await page.getByTestId('login-submit').first().click();
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
    })