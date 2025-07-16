import { test, expect } from '../pageObjects/fixtures/pageFixtures';

test.describe('Landing Page', async () => {
  test('Goto page', async ({ homePage, baseURL }) => {
    homePage.header.gotoHome();
    //await expect(homePage.page).toHaveScreenshot('homePage.png', { maxDiffPixels: 100 });
    await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home');
  });

  test('Goto page test 1', async ({ homePage, baseURL }) => {
    homePage.header.gotoHome();
    await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home');
  });

  test('Shop by Category burger menu slider', async ({ homePage, baseURL }) => {
    homePage.header.gotoHome();
    homePage.header.burgerMenuClick()
    await expect(homePage.header.burgerSlider).toBeVisible();
    //await expect(homePage.page).toHaveScreenshot('burgerSlider.png', { maxDiffPixels: 900 });
    await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home');
  });

  test('Goto page test + footer description check', async ({ homePage, baseURL }) => {
    homePage.header.gotoHome();
    await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home');
    await expect(homePage.footer.footerDesc).toHaveText('© LambdaTest - Powered by OpenCart');
  });
});
