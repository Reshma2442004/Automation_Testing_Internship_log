
//const { BaseClass } = require("../BaseLibrary/BaseClass.spec.js");

const { BaseClass } = require("../BaseClass/BaseClass.spec");

 export class PageObject extends BaseClass
 /**
* @param {import('playwright/test').Page} page 
* @param {import('playwright/test').expect} expect
* 
*/

{
    constructor(page,expect)
    {
        super(page,expect)
        this.username =this.page.locator("xpath=//input[@id='user-name']")
        this.password=this.page.locator("xpath=//input[@id='password']")
        this.loginbutton=this.page.locator("xpath=//input[@id='login-button']")

        this.addtocart=this.page.locator("xpath=//button[@id='add-to-cart-sauce-labs-backpack']");
        this.shoppingicon=this.page.locator("xpath=//a[@data-test='shopping-cart-link']");
        this.checkoutbutton=this.page.locator("xpath=//button[@id='checkout']");
        this.firstname=this.page.locator("xpath=//input[@id='first-name']");
        this.lastname=this.page.locator("xpath=//input[@id='last-name']");
        this.zipcode=this.page.locator("xpath=//input[@id='postal-code']");
        this.continuebutton=this.page.locator("xpath=//input[@id='continue']");
        this.finishbutton=this.page.locator("xpath=//button[@id='finish']");
        this.backtohome=this.page.locator("xpath=//button[@id='back-to-products']");

    }
}



