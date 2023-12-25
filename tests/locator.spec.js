const { test, expect } = require('@playwright/test');

test('@UI Locator', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        console.log(await page.title());
        await expect(page).toHaveTitle("OrangeHRM")

        await page.locator("[name='username']").fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123')
        await page.locator("[type='submit']").click();

})