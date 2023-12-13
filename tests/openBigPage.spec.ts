import { test, expect } from '@playwright/test'
import { BasePage } from '../pageObjects/pages/homePage'
import { ComplicatedPage } from '../pageObjects/pages/complicatedPage'

test('Goto complicated page', async ({ page }) => {
    const currentPage = new BasePage(page)
    const complicatedPage = new ComplicatedPage(page)
    await currentPage.gotoStart()
    await currentPage.pageContent.openBigPage()
    await expect(page).toHaveURL('https://ultimateqa.com/complicated-page')
    await currentPage.header.openHeaderBlog()
    await expect(page).toHaveURL('https://ultimateqa.com/blog/')
    await currentPage.footer.openFooterBlog()
    await expect(page).toHaveURL('https://ultimateqa.com/blog/')
    await currentPage.gotoStart()
    await currentPage.pageContent.openBigPage()
    await complicatedPage.buttonSection.isVisible()
    await currentPage.header.openHome()
    await expect(page).toHaveURL('https://ultimateqa.com/')
})