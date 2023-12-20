import { type Page } from "@playwright/test";
import { FooterLocators } from "./footerComponent";
import { PageBodyLocators } from "./pageBodyComponent";
import { Header } from "./headerComponent/header";


export class BasePage {
  constructor(readonly page: Page) {}

  public header = new Header(this.page.locator('header'))
  public footer = new FooterLocators(this.page.locator('footer'))
  public pageBody = new PageBodyLocators(this.page.locator('#common-home'))

}