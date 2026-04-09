// @ts-check
import { test, expect } from '@playwright/test';

test('page playwright', async ({page})=>
{


  await page.goto("https://stg.arabtherapy.com/ar");
 /* await page.locator('#input-384').fill('lubna_automation+5800@gmail.com');
   await page.locator('#input-387').fill('123456');
   await page.locator('button[type="submit"]').click();*/
 
 await page.getByText('ابدأ الآن إنشاء حساب').click();
  await page.getByText('علاج فردي').click();
  await page.locator('div').filter({ hasText: /^الاكتئاب$/ }).first().click();
  await page.locator('div').filter({ hasText: /^القلق والخوف$/ }).first().click();
  await page.locator('div').filter({ hasText: /^ضغوط نفسية$/ }).first().click();
  await page.locator('div').filter({ hasText: /^مشاكل الثقة بالنفس وتقدير الذات$/ }).first().click();
  await page.locator('div').filter({ hasText: /^أود تحسين نفسي ولا أعلم من أين أبدأ$/ }).first().click();
  await page.locator('div').filter({ hasText: /^البحث عن معنى وهدف في الحياة$/ }).first().click();
  await page.locator('div').filter({ hasText: /^تم نصحي بذلك$/ }).first().click();
  await page.locator('div').filter({ hasText: /^واجهت صدمة معينة$/ }).first().click();
  await page.locator('div').filter({ hasText: /^مشاكل في بناء العلاقات والحفاظ عليها$/ }).first().click();
  await page.locator('div').filter({ hasText: /^الإدمان$/ }).first().click();
  await page.locator('.mt-3.v-btn').first().click();
  await page.locator('div').filter({ hasText: /^مشاكل في النوم$/ }).first().click();
  await page.locator('div').filter({ hasText: /^العصبية والإنفعالات المتكررة$/ }).first().click();
  await page.locator('div').filter({ hasText: /^البكاء باستمرار$/ }).first().click();
  await page.locator('div').filter({ hasText: /^الحزن الدائم والمزاج المنخفض$/ }).first().click();
  await page.locator('div').filter({ hasText: /^الرغبة بالعزلة$/ }).first().click();
  await page.locator('div').filter({ hasText: /^مشاكل في الشهية \(أكل كميات أكبر\/أقل من المعتاد\)$/ }).first().click();
  await page.locator('div:nth-child(27) > .slide-body > .mt-3').click();
  await page.locator('div:nth-child(35) > .slide-body > .multi-select-list > div').first().click();
  await page.locator('div:nth-child(49) > .slide-body > .multi-select-list > div').first().click();
 await page.locator('#input-538').fill('45');
  await page.getByText('ذكر').nth(1).click();
  await page.getByPlaceholder('ابحث هنا').click();
await page.getByPlaceholder('ابحث هنا').fill('الأردن');
await page.getByText('الأردن', { exact: true }).click();
  await page.locator('form').filter({ hasText: 'ما هي جنسيتك؟ التالي نحن نقوم بالاستفسار عن الجنسية لتعيين معالج يتناسب مع ثقافت' }).getByRole('button').click();
  await page.getByText('لا يهم').click();
  await page.getByText('أفضل عدم الإفصاح عن ذلك').click();
  await page.locator('div:nth-child(56) > .slide-body > .multi-select-list > div').first().click();
  await page.locator('div:nth-child(48) > .slide-body > .multi-select-list > div').first().click();
  await page.getByText('الواتساب').click();
  await page.getByText('من الفيسبوك').click();

  const randomDigits = Math.floor(1000 + Math.random() * 9000).toString();
  await page.getByRole('textbox', { name: 'الاسم الأول' }).click();
  await page.getByRole('textbox', { name: 'الاسم الأول' }).fill('Test');
  await page.getByRole('textbox', { name: 'الاسم الأول' }).press('Tab');
  await page.getByRole('textbox', { name: 'اسم العائلة' }).fill(`${randomDigits}`);
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).click();
  const randomEmail = `lubna_automation+${randomDigits}@gmail.com`;
  const password = '123456';
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).fill(randomEmail);
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).press('Tab');
  await page.getByRole('textbox', { name: 'كلمة المرور' }).fill(password);
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'إنشاء حساب' }).click();
  await page.waitForSelector('text=ابدأ الآن');
  await page.getByRole('link', { name: 'ابدأ الآن' }).first().click();
  const user = await page.evaluate(() => localStorage.getItem('user'));
  if (user) {
    const userData = JSON.parse(user);
    expect(userData.user.email).toBe(randomEmail);
    console.log(userData.user.id);
    console.log(userData.user.email);
  } else {
    throw new Error('User data not found in localStorage');
  }

  await page.getByText('بطاقة ائتمان').nth(1).click();
  await page
    .frameLocator('iframe[title="Secure card number input frame"]').nth(0)
    .locator('input[placeholder="1234 1234 1234 1234"]') // or "Card number"
    .fill('4242 4242 4242 4242');

  // CVC
  await page
    .frameLocator('iframe[title="Secure CVC input frame"]').nth(0)
    .locator('input[placeholder="CVC"]')
    .fill('123');

  // MM / YY
  await page.frameLocator('iframe[title="Secure expiration date input frame"]').nth(0)
    .locator('input[placeholder="MM / YY"]')
    .fill('12 / 27');

  await page.getByRole('button', { name: 'اشترك الآن' }).click();

  await page.waitForTimeout(6000);


  await page.getByText('سيتم تعيين أخصائي لك خلال 24 ساعة', { exact: true }).click();


  await page.locator('span').filter({ hasText: 'Test' }).click();

  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();

  

await page.waitForSelector('text=تسجيل الدخول');
  
await page.getByRole('link', { name: 'تسجيل الدخول' }).click();

await page.getByRole('textbox', { name: 'أدخل البريد الإلكتروني أو رقم الهاتف' }).fill('admin@admin.com');

// ملء كلمة المرور
await page.getByRole('textbox', { name: 'كلمة المرور' }).waitFor({ state: 'visible', timeout: 60000 });
await page.getByRole('textbox', { name: 'كلمة المرور' }).fill('1234');

// اضغط زر تسجيل الدخول
await page.getByRole('button', { name: 'تسجيل الدخول' }).click();
await page.getByRole('textbox', { name: '-' }).first().click();
  await page.getByRole('textbox', { name: '-' }).first().fill('1');
  await page.getByRole('textbox', { name: '-' }).nth(1).fill('2');
  await page.getByRole('textbox', { name: '-' }).nth(2).fill('3');
  await page.getByRole('textbox', { name: '-' }).nth(3).fill('4');
  await page.getByRole('link', { name: 'العملاء', exact: true }).click();

  

  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).click();
  await page.getByRole('textbox', { name: 'البريد الإلكتروني' }).fill(randomEmail);
  await page.locator('.toggle > .v-icon').click();
  await page.locator('form').getByRole('button').nth(2).click();
  // Wait for the "تعيين" button to be visible and enabled before clicking
  await page.waitForSelector('button:has-text("تعيين")', { state: 'visible', timeout: 20000 });
  await page.getByRole('button', { name: 'تعيين' }).first().click();
  await page.getByRole('textbox', { name: 'الأخصائي' }).click();
  await page.getByRole('textbox', { name: 'الأخصائي' }).fill('Amer Therapist');
  await page.getByRole('option', { name: 'Amer Therapist' }).locator('span').click();
  await page.getByRole('button', { name: 'حفظ' }).click();
  await page.getByText('Super Admin').first().click();
  await page.getByRole('button', { name: 'تسجيل الخروج' }).click();



await page.getByRole('link', { name: 'تسجيل الدخول' }).click();

 await page.getByRole('textbox', { name: 'أدخل البريد الإلكتروني أو رقم الهاتف' }).fill(randomEmail);

await page.getByRole('textbox', { name: 'كلمة المرور' }) .fill('123456');
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();

await page.getByPlaceholder('(+971) 000000000').fill(`50329${randomDigits}`);
test.setTimeout(120000);
  await page.waitForSelector('text=متابعة');
  await page.getByRole('button', { name: 'متابعة' }).click();

  await page.waitForSelector('button:has-text("حجز موعد")', { timeout: 30000 });

await page.locator('button:has(span:has-text("حجز موعد"))').click();


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

});