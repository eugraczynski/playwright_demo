import { test as base } from "@playwright/test"
import HomePage from "../pages/homePage"

type pages =  {
    homePage: HomePage
}

export const test = base.extend<pages>({
    homePage:async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    }
})

export { expect, Page, Locator } from "@playwright/test";