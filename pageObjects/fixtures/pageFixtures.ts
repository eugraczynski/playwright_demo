import { test as base } from "@playwright/test"
import { BasePage } from "../pages/components/homePageComponents"

type pages =  {
    homePage: BasePage
}

export const test = base.extend<pages>({
    homePage: async ({ page }, use) => {
        const homePage = new BasePage(page)
        await homePage.page.goto('/')
        await use(homePage)
    }
})

export { expect, Page, Locator } from "@playwright/test";