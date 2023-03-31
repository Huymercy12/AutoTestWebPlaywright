import { test, expect } from "@playwright/test";
import RegisterPage from "../pom/registerPage";
import LoginPage from "../pom/loginPage";
import HomePage from "../pom/homePage";
import SpecialPage from "../pom/specialPage";
const email = "huy12121@gmail.com";
const password = "12345678";
test.describe("page object model demo", async () => {
    test("Register test 01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Huy");
        await register.enterLastName("Vu");
        await register.enterEmail(email);
        await register.enterTelephone("1234567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandConditions();
        await register.clickContinuetoRegister();
    })
    test("Login test 02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterPass(password);
        await login.clickLoginbtn();
        console.log(await page.title());
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const home = new HomePage(page);
        const specialPage = new SpecialPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await home.clickSpecialMenu();
        await specialPage.addItemToCart();
        const isVisibile = await specialPage.isToAskVisible();
        expect(isVisibile).toBeVisible();

    })
})