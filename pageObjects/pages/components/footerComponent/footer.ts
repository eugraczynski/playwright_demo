import { Locator, Page } from "@playwright/test";

export class Footer{
    footerDesc: Locator 
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
        this.footerDesc = this.page.getByText('© LambdaTest - Powered by OpenCart');
  }
}
