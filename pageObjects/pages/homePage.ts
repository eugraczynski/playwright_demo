import { HomePageLocators } from '../pages/components/header'


export default class HomePage extends HomePageLocators{
    async gotoLandingPage() {
        await this.page.goto('/')
        await this.links.home
    }
}