const { test, expect } = require('@playwright/test');

test('Different types of locator', async ({ page }) => {

        await page.goto('https://www.rahulshettyacademy.com/angularpractice/');;

        await page.getByLabel('Check me out if you Love IceCreams!').click();
        await page.getByLabel('Employed').check();
        await page.getByLabel('Gender').selectOption('Female')
        await page.getByPlaceholder("Password").fill("abc123")
        await page.getByRole("button",{name: 'Submit'}).click();
        await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

        await page.getByRole("link",{name:'Shop'}).click();

})