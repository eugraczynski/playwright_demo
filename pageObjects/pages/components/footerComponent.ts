import { Locator, type Page } from "@playwright/test";


export class FooterLocators {
  constructor(readonly header: Locator) {}
  readonly links = {
      home: this.header.getByTitle('Poco Electro')
  }    
}