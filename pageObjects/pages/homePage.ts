import { expect, type Locator, type Page} from '@playwright/test'

export class BasePage {
    readonly page: Page
    readonly pageContent: PageContent
    readonly header: Header
    readonly footer: Footer
    constructor(page: Page) {
        this.page = page
        this.pageContent = new PageContent(this.page.locator('#et-main-area'))
        this.footer = new Footer(this.page.locator('footer'))
        this.header = new Header(this.page.locator('header'))
    }

    async gotoStart() {
        await this.page.goto('https://ultimateqa.com/automation')
    }
}


class HeaderLocators {
    readonly header: Locator
    readonly home: Locator
    readonly javaAcademy: Locator
    readonly learning: Locator
    readonly successStories: Locator
    readonly blog: Locator
    readonly about: Locator
    constructor(header: Locator) {
        this.header = header
        this.home = this.header.locator('a[href="https://ultimateqa.com/"]')
        this.about = this.header.locator('a', { hasText: 'About'})
    }
}

class Header extends HeaderLocators{
    constructor(page: Locator) {
        super(page)
    }
    async openHome() {
        await this.home.click()
    }
    async openHeaderBlog() {
        await this.header.locator('a', { hasText: 'Blog'}).click()
    }
    async openHeaderAbout() {
        await this.about.locator('a', { hasText: 'About'}).click()
    }
}






class PageContent {
    readonly pageBody: Locator
    constructor(pageBody: Locator) {
        this.pageBody = pageBody
    }
    async openBigPage() {
        await this.pageBody.locator('a', { hasText: 'Big page with many elements'}).click()
    }
}

class Footer {
    readonly footer: Locator
    constructor(footer: Locator) {
        this.footer = footer
    }
    async openFooterBlog() {
        await this.footer.locator('a', { hasText: 'Blog'}).click()
    }
}



