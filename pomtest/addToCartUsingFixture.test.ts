
import { test,expect } from "../base/pomFixture";
import * as xlsx from 'xlsx';
// const email = "huy12121@gmail.com";
// const password = "12345678";
// test.describe("page object model demo", async () => {
    test("Register test 01", async ({ page, baseURL,registerPage }) => {
        await page.goto(`${baseURL}route=account/register`);
        const workbook = xlsx.readFile('dataFile/information.xlsx');
        const worksheet = workbook.Sheets[workbook.SheetNames['user']];
        const data = xlsx.utils.sheet_to_json(worksheet);
        for (const row in data) {
        const email: string = row['Username'];
        const password: string = row['Password'];
        await registerPage.enterFirstName("Huy");
        await registerPage.enterLastName("Vu");
        await registerPage.enterEmail(email);
        await registerPage.enterTelephone("1234567890");
        await registerPage.enterPassword(password);
        await registerPage.enterConfirmPassword(password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandConditions();
        await registerPage.clickContinuetoRegister();
        }})

//     test("Login test 02", async ({ page, baseURL,loginPage }) => {
       
//         await page.goto(`${baseURL}route=account/login`);
//         await loginPage.enterEmail(email);
//         await loginPage.enterPass(password);
//         await loginPage.clickLoginbtn();
//         console.log(await page.title());
//         expect(await page.title()).toBe("My Account");
//     })

//     test("Add to cart", async ({ page, baseURL,loginPage,homePage,specialPage }) => {
        
//         await page.goto(`${baseURL}route=account/login`);
//         await loginPage.login(email, password);
//         await homePage.clickSpecialMenu();
//         await specialPage.addItemToCart();
//         const isVisibile = await specialPage.isToAskVisible();
//         expect(isVisibile).toBeVisible();

//     })
// })