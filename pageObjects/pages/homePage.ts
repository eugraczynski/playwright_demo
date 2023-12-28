import { type Page } from "@playwright/test";
import { Header } from "./components/headerComponent/header";
import { Footer } from "./components/footerComponent/footer";


export class HomePage {
  constructor(readonly page: Page) {}

  public header = new Header(this.page.locator('header'))
  public footer = new Footer(this.page.locator('footer'))

}