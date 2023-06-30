import {test, chromium, Browser, Page } from '@playwright/test';
import * as exceljs from 'exceljs';


test("data test",async function runTests() {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  // Đọc dữ liệu từ tệp Excel
  const workbook = new exceljs.Workbook();
  await workbook.xlsx.readFile('dataFile/information.xlsx');
  const worksheet = workbook.getWorksheet('user');

    const rowCount = worksheet.rowCount;
  // Thực hiện các bài kiểm tra với dữ liệu từ tệp Excel , nếu như ko nhận method value() thì chuyển sang method text() để định dạng giá trị cell
  // ở đây sử dụng dấu chấm ! == khẳng định giá trị ô đó không là null và undefined
  // nếu không chắc chắn là không phải null và undefined thì ta có thể sử dụng toán tử ? để sử dụng
  // cách đơn giản nhất đó là dùng if else để kiểm tra biến đó 
  
  for (let i = 2; i <= rowCount; i++) {
    const username = worksheet.getCell(`A${i}`).text!.toString(); 
    console.log(username);
    const password = worksheet.getCell(`B${i}`).value!.toString();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await page.locator('#input-email').type(username)
    await page.locator('#input-password').type(password)
  }

  await browser.close();
}
)
