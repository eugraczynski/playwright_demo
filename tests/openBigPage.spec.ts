import { test, expect } from '../pageObjects/fixtures/pageFixtures'


test.describe('Landing Page',async () => {
    test('Goto page', async ({ homePage, baseURL }) => {
        await homePage.header.gotoHome()
        await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home')
    })
    
    test('Goto page test 1', async ({ homePage, baseURL }) => {
        await homePage.header.gotoHome()
        await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home1')
    })
    
    test('Goto page test 2', async ({ homePage, baseURL }) => {
        await homePage.header.gotoHome()
        await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home')
    })
    
    test('Goto page test 3', async ({ homePage, baseURL }) => {
        await homePage.header.gotoHome()
        await expect(homePage.page).toHaveURL(baseURL + '/index.php?route=common/home3')
    })
})

