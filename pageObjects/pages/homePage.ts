import { Page } from '@playwright/test';
import { Header } from './components/headerComponent/header';
import { Footer } from './components/footerComponent/footer';

export class HomePage { 
  readonly header: Header;
  readonly footer: Footer;
    constructor(readonly page: Page) {
    this.header = new Header(this.page);
    this.footer = new Footer(this.page);
  }
}