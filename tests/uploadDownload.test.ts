import { expect, test } from "@playwright/test";


test("Download file", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Huymercy0023315");
    await page.click("id=create");
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")

    ]);
    const fileName = download.suggestedFilename();
    await download.saveAs(fileName);
})

test.only("Upload file", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    // await page.setInputFiles("input[type='file']", ["uploadFile/gut.PNG", "uploadFile/hhcjcjc.PNG"]);
    // cách 2 thực hiện chuỗi hành động ta dùng promise
    const [uploadFile] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
        
    ]);
    const isMultiple = await uploadFile.isMultiple();
    console.log(isMultiple);
    uploadFile.setFiles(["uploadFile/gut.PNG", "uploadFile/hhcjcjc.PNG"]);
    

})