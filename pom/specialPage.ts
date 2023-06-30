import { Page } from "@playwright/test";

export default class SpecialPage {
    constructor(public page: Page) { }
    async addItemToCart() {
        await this.page.click("//h3[contains(text(),'Filter')]");
        await this.page.click("//a[contains(text(),'Desktops (75)')]");
        await this.page.hover("//div[@class='image']//a", { strict: true });
        await this.page.locator("//button[@title='Add to Cart']").nth(0).click()
    }
    async isToAskVisible() {
        const toast = await this.page.locator("//a[@class='btn btn-primary btn-block']");
        await toast.waitFor({ state: "visible" });
        return toast;
    }
}