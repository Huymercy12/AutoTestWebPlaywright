import { chromium , test } from "@playwright/test";

test("Login test demo", async() =>{
    const browser = await chromium.launch(
       { headless : false}
    );
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com/');

    await page.fill('//input[@name="q"]','Huy');

    await page.click("");

})
