import {
    expect, Page, test
} from "@playwright/test";

test("Interract with multiple tabs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("a[title='Follow @Lambdatesting on Twitter']")
    // ])
    // console.log(newWindow.url());

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("a[id='followboth']")
    ])

    await multiPage.waitForLoadState();
    const pages = multiPage.context().pages();
    console.log("Tổng số page :" + pages.length);

    // hàm for each để duyệt các tab trong pages

    pages.forEach(tab => {
        console.log(tab.url());
    })
    // gán và sử dụng các page con theo index
    let facebookPage: Page;
    for (let i = 0; i < pages.length; i++) {
        const url = pages[i].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[i]
        }
    }
    const text = await facebookPage.textContent("//h1[text()='LambdaTest']");
    console.log(text);
})