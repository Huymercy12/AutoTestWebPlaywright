import { Page } from "@playwright/test";
import locator from "./homePagelocator";

export default class HomePage {
    constructor(public page: Page) {}
    homPageLocators: locator = new locator();
    async clickSpecialMenu() {
        await this.page.click(this.homPageLocators.loginButton);
    }
}