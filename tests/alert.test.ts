import { expect, test } from "@playwright/test";


// test("handling alert", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
//     page.on("dialog", async (alert) => {
//         const message = alert.defaultValue();
//         console.log(message);
//         await alert.accept("Huy mercy");
//     })
//     await page.locator("button:has-text('Click Me')").nth(2).click();
//     // expect(page.locator("id=confirm-demo")).toContainText("Cancel");
//     expect(page.locator("id=prompt-demo")).toContainText("Huy");
//     page.waitForTimeout(2000);
// })

test("Bootstrap Modals", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    
    await page.click("(//button[text()='Launch Modal'])[1]");

    await page.click("(//button[text()='Save Changes'])[1]");
})