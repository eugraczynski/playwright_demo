import { type Page } from "@playwright/test";


export class HomePageLocators {
  constructor(readonly page: Page) {}
  readonly links = {
      home: this.page.locator('')
  }    
}