import { expect, test } from "@playwright/test"

// cach don gian nhat la dien dung dinh dang ngay
test("Calendar", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1999-03-15";
    await page.fill("id=birthday", date);
    await page.waitForTimeout(2000)
})

test.only("Calendar moment", async ({ page }) => {
    await selectDate();
    async function selectDate() {
        await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
        await page.click("input[placeholder='Start date']");
        const mmYYYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");
        const next = page.locator("(//th[@class='next'])[1]");

        await page.click("//td[text()='30']");
        await page.waitForTimeout(2000);
    }})
