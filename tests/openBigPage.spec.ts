import { test, expect } from '../pageObjects/fixtures/homePageFixture'


test('Goto page', async ({ page, homePage, baseURL }) => {
    await homePage.gotoLandingPage()
    await expect(homePage.page).toHaveURL(baseURL + '')
    await homePage.links.home
})

