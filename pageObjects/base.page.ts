import { type Page } from "@playwright/test";
import Footer from "./components/header";

export abstract class BasePage {
  constructor(readonly page: Page) {}

  public footer = new Footer(this.page.locator("footer"));

  async open(path: string) {
    await this.page.goto(path);
  }
}