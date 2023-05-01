import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
import path from 'path';

test.describe('Upload File', () => {
  let cartPage: CartPage;
  
  const fileName = [ 'logotitle.png', '3mb-file.pdf']

  for (const name of fileName) {
    test(`should upload a ${name} file`, async ({ page }) => {
      cartPage = new CartPage(page);

      await page.goto('https://practice.automationbro.com/cart/');

      const filePath = path.join(__dirname, `../data/${name}`);

      cartPage.uploadComponent().uploadFile(filePath);

      await expect(cartPage.uploadComponent().successText)
        .toContainText('uploaded successfully', {timeout: 40000});
    });
  }
  
  test.skip('should upload a test file with wait for state command and assertion wait', async ({ page }) => {
    cartPage = new CartPage(page);

    await page.goto('https://practice.automationbro.com/cart/');

    const filePath = path.join(__dirname, '../data/3mb-file.pdf');

    cartPage.uploadComponent().uploadFile(filePath);

    // hardcoded sleep - wrong way
    // await page.waitForTimeout(5000);

    // wait for condition
    // await page.locator('#wfu_messageblock_header_1_1')
    //  .waitFor({ state: 'visible', timeout: 40000 });

    // assertion
    await expect(cartPage.uploadComponent().successText)
    .toContainText('uploaded successfully', {timeout: 35000});
  });
});