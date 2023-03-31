import { Page } from "@playwright/test";

export default class LoginPage {
    constructor(public page: Page) {

    }
    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterPass(password);
        await this.clickLoginbtn();
    }


    async enterEmail(email: string) {
        await this.page.locator("#input-email").type(email);

    }
    async enterPass(pass: string) {
        await this.page.locator("#input-password").type(pass);

    }
    async clickLoginbtn() {
        await this.page.click("input[value='Login']");
    }
}