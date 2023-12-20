import { HeaderLocators } from "./headerComponent";

export class Header extends HeaderLocators {
    gotoHome() {
        this.links.home.click()
    }
}