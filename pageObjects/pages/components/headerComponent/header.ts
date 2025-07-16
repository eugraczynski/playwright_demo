import { Locator, Page } from '@playwright/test';

export class Header {

  home: Locator;
  burgerMenu: Locator;
  burgerSlider: Locator;

  someLocator: string;
  someLocatorFinder: Locator;

  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;

    this.someLocator = "#id"
    this.someLocatorFinder = this.page.locator(this.someLocator);

    this.home = this.page.locator('div[data-id="217821"]');
    this.burgerMenu = this.page.getByTestId('217832');
    this.burgerSlider = this.page.getByTestId('217841');
  }
  
  async gotoHome() {  
    await this.home.click();
  }
  async burgerMenuClick() {  
    await this.burgerMenu.click();  
  }
  async burgerSliderClick() {  
    await this.burgerSlider.click();  
  }
}