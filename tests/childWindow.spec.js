const { test, expect } = require('@playwright/test');

test('Child window handling ', async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();
        const documentLink = page.locator("[href*='documents-request']")
        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');

        const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                documentLink.click(),
        ])

        const text = await newPage.locator(".red").textContent();
        const arrayText = text.split("@")
        const domain = arrayText[1].split(" ")[0]
        console.log(text)
        console.log("This is from next page"+domain)  

       await page.locator('#username').fill(domain);

       console.log("this is after fill "+await page.locator('#username').textContent())
})