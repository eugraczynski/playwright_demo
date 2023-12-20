import { Locator, type Page } from "@playwright/test";


export class PageBodyLocators {
  constructor(readonly page: Locator) {}
  readonly links = {
      home: this.page.getByTitle('Poco Electro')
  }    
}