const{test,expect}= require('@playwright/test')
const {logIn} = require('../PageObjectModal/logIn')

let page;
let HomePage;
test.describe("Home Page",()=>{
        test.beforeAll(async({browser})=>{
                page = await browser.newPage();
                HomePage = new logIn(page);
                await HomePage.navigate()
        })

        test('validate the page title',async()=>{
                await HomePage.pageTitle()
        })

        test('validate the free link is visible or not',async()=>{
                await HomePage.freeLink()
        })

        test('should admin radio button is present',async()=>{
                await HomePage.radioButton()
        })
})