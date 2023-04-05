import { test as baseTest } from "@playwright/test";
import RegisterPage from "../pom/registerPage";
import LoginPage from "../pom/loginPage";
import HomePage from "../pom/homePage";
import SpecialPage from "../pom/specialPage";
type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialPage: SpecialPage;
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
     homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    specialPage: async ({ page }, use) => {
        await use(new SpecialPage(page));
    },



});

export const test = testPages;
export const expect = testPages.expect;
