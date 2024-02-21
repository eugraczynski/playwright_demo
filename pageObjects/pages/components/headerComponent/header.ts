import { HeaderLocators } from './headerComponent';

export class Header extends HeaderLocators {
  constructor(name) {
    super(name);
  }
  gotoHome() {
    this.links.home.click();
  }
}
