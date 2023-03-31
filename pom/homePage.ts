import { Page } from "@playwright/test";

export default class HomePage {
    constructor(public page: Page) {}

    async clickSpecialMenu() {
        await this.page.click("(//div//span[contains(text(),'Special')and@class='title'])[2]");
    }
}