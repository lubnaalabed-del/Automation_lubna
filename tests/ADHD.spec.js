import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://uat.arabtherapy.com/ar');

  await page.getByRole('button', { name: 'اختبارات نفسية' }).click();

  await page.getByTestId('tools-search-input').fill('adhd');

  //  فتح التاب الجديد (مرة واحدة فقط)
  const [quizPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByTestId('start-quiz-btn-adhd').click()
  ]);

  await quizPage.waitForLoadState();

  await quizPage.getByTestId('question-1-option-1').click();
  await quizPage.getByTestId('question-2-option-1').click();
  await quizPage.getByTestId('question-3-option-1').click();
  await quizPage.getByTestId('question-4-option-1').click();
  await quizPage.getByTestId('question-5-option-1').click();
  await quizPage.getByTestId('question-6-option-1').click();
  await quizPage.getByTestId('question-7-option-1').click();
  await quizPage.getByTestId('question-8-option-1').click();
  await quizPage.getByTestId('question-9-option-1').click();
  await quizPage.getByTestId('question-10-option-1').click();
  await quizPage.getByRole('button', { name: 'Back' }).click();
  await quizPage.getByTestId('question-9-next-btn').click();

  await quizPage.getByTestId('finish-btn').click();

  await quizPage.getByRole('button', { name: 'إرسال الاختبار للأصدقاء' }).click();

  await quizPage.getByRole('textbox', { name: 'أدخل رقم الهاتف' })
    .fill('791439700');

  await quizPage.getByRole('button', { name: 'تم' }).click();

  await quizPage.getByRole('button', { name: 'نسخ الرابط' }).click();

  await quizPage.getByRole('button', { name: 'العودة للخيارات' }).click();
  await quizPage.getByRole('button', { name: 'عرض النتيجة' }).click();
});