import { Locator } from '@playwright/test';

export class HeaderLocators {
  constructor(readonly page: Locator) {}
  readonly links = {
    home: this.page.getByTitle('Poco Electro'),
  };
  getname() {}
}
