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
  });

  test('Goto page test + footer description check', async ({ homePage, baseURL }) => {
    homePage.header.gotoHome();
    await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home');
    await expect(homePage.footer.footerDesc).toHaveText('© LambdaTest - Powered by OpenCart');

    
    await homePage.page.route('**/index.php?route=common/home', (route) => {
      const json = [{ name: 'Strawberry', id: 21 }]
      route.fulfill({ headers: { 'Connection': 'keep-alives' }, json });
      });
    })


//   test("mocks a fruit and doesn't call api", async ({ page }) => {
//   // Mock the api call before navigating
//   await page.route('*/**/api/v1/fruits', async route => {
//     const json = [{ name: 'Strawberry', id: 21 }];
//     await route.fulfill({ json });
//   });
//   // Go to the page
//   await page.goto('https://demo.playwright.dev/api-mocking');

//   // Assert that the Strawberry fruit is visible
//   await expect(page.getByText('str', {exact: true})).toBeVisible();
// });
  });

  

