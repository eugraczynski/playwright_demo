import { expect, type Locator, type Page} from '@playwright/test'

export class BasePage {
    readonly page: Page
    readonly bigPage: Locator
    readonly landingPage: Locator
    readonly pricingPage: Locator
    readonly formPage: Locator
    readonly dynamicPage: Locator
    readonly loginPage: Locator
    readonly interactionPage: Locator

    constructor(page: Page) {
        this.page = page
        this.bigPage = page.locator('a', { hasText: 'Big page with many elements' })
    }

    async gotoStart() {
        await this.page.goto('https://ultimateqa.com/automation')
    }

    async openBigPage() {
        await this.bigPage.click()
    }
}