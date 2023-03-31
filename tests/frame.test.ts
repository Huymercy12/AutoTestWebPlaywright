import { expect, test } from "@playwright/test";


test("Interract with iframes", async ({page}) =>{
    await page.goto('https://letcode.in/frame');

    const frame = page.frameLocator("#firstFr");

    await frame.locator("input[name='fname']").fill("Huy15");
    await frame.locator("input[name='lname']").fill("Huy002");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");

    await innerFrame.locator("input[name='email']").fill("Huy");


    // const allFrames = page.frames();
    // console.log("Tổng số frame : "+ allFrames.length);

    // const myframe = page.frame("firstFr");
    // // sử dụng toán tử ? = câu lệnh điều kiện if ...else để check biến myFrame là null hay không nếu null không thể run tiếp

    // await myframe?.fill("input[name='fname']","Huy mercy");
    // await myframe?.fill("input[name='lname']","Huy@gmail.com");
    
    // expect(await myframe?.locator("p.has-text-info").textContent()).toContain("You have entered");
})