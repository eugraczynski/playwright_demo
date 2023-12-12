import { expect, type Locator, type Page} from '@playwright/test'

export class BasePage {
    readonly page: Page
    readonly bigPage: Locator
    readonly header: Locator

    constructor(page: Page) {
        this.page = page
        this.bigPage = page.locator('a', { hasText: 'Big page with many elements' })
        this.header = page.locator('#main-menu')
    }

    async gotoStart() {
        await this.page.goto('https://ultimateqa.com/automation')
    }

    async openBigPage() {
        await this.bigPage.click()
    }

    async openBlog() {
        await this.header.locator('a', { hasText: 'Blog'}).click()
    }
}

