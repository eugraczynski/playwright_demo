import { BasePageComponent } from "../base.pageComponent";

export default class Header extends BasePageComponent {
  readonly links = {
    home: this.host.getByRole("link", { name: "Home" })
  };
}