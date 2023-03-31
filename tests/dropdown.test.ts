import { expect, test } from "@playwright/test";


test("", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", { label: 'Tuesday' });
    await page.waitForTimeout(2000);
    const multiSelect = await page.locator("select#multi-select");
    multiSelect.scrollIntoViewIfNeeded();
    await page.selectOption("#multi-select", [{
        label: "Texas"
    },
    {
        index: 2
    }, {
        value: "Washington"
    }])


})

test.only("Chọn phần tử từ jquery dropdown",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    async function selectCountry(contryName: string) {
        await page.click("select#country+span");
        await page.locator("ul#select2-country-results").locator("li",{
            hasText : contryName
        }).click()
    }
    await selectCountry("India");
    await selectCountry("Denmark");
})