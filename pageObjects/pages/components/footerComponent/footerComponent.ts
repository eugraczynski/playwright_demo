import { Locator, type Page } from "@playwright/test";


export class FooterLocators {
  constructor(readonly footer: Locator) {}
  readonly footerDesc = this.footer.getByTestId('217561')  
}