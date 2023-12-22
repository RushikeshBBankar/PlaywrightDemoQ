const { test, expect } = require('@playwright/test');

test('@web Error validation', async ({ page }) => {

        await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());
        const title = await page.title()
        await expect(page).toHaveTitle(title)

        await page.locator('#username').fill('ahulshettyacademy ');
        await page.locator("[type='password']").fill('learning')
        await page.locator('#signInBtn').click();

        console.log(await page.locator("[style*='block']").textContent())
        await expect(page.locator("[style*='block']")).toContainText('Incorrect')


})