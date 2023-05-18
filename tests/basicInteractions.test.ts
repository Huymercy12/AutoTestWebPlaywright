import { expect, test } from "@playwright/test";


test("Test Interactions inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("before entering text : " + await messageInput.inputValue());
    await messageInput.type("Hi HuyMercy");
    console.log("after entering text : " + await messageInput.inputValue());

}
)

test("Sum", async ({ page }) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("input#sum1");
    const sum2input = page.locator("input#sum2");

    const getValuebtn = page.locator("//button[text()='Get values']");
    let sum1 = 121;
    let sum2 = 546;

    await sum1input.type("" + sum1);
    await sum2input.type("" + sum2);
    await getValuebtn.click();
    const result = page.locator("#addmessage");
    console.log("\n" + await result.textContent());
    let expectedResult = sum1 + sum2;
    expect(result).toHaveText("" + expectedResult);
})

test("Check box", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
    page.waitForTimeout(3000);
})