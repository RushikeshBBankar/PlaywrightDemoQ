const {expect} = require('@playwright/test');

class logIn{
        constructor(page){
                this.page = page;
                this.username = page.locator('#username');
                this.password = page.locator('#password');
                this.signInButton = page.locator('#signInBtn');
                this.documentLink = page.locator("a[href*='documents-request']");
                this.adminRadioButton = page.locator("[value='admin']")


        }

        async navigate(){
                await this.page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
                //await this.acceptCookies.click();        
        }

        async pageTitle(){
                await expect(this.page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
        }

        async freeLink(){
                await expect(this.documentLink).toHaveAttribute('class','blinkingText')
        }


        async radioButton(){
                await expect(this.adminRadioButton).toHaveAttribute('type','radio')
        }


}
module.exports = {logIn}
