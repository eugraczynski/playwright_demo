import { test, expect } from '@playwright/test'
import { BasePage } from '../pageObjects/pages/homePage'

test('Goto complicated page',async ({ page }) => {
    const startingPage = new BasePage(page);
    await startingPage.gotoStart()
    await startingPage.openBigPage()
    await expect(page).toHaveURL('https://ultimateqa.com/complicated-page')
    await startingPage.openBlog()
    await expect(page).toHaveURL('https://ultimateqa.com/blog/')
})