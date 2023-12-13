import { expect, type Locator, type Page} from '@playwright/test'

export class ComplicatedPage {
    readonly page: Page
    readonly buttonSection: Locator

    constructor(page: Page) {
        this.page = page
        this.buttonSection = page.locator('.et_pb_row et_pb_row_2 et_pb_row_4col')
    }
}