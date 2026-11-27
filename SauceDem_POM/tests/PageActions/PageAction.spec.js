const { PageObject } = require("../PageObjects/PageObject.spec.js");
//const { PageObject } = require("../PageObjects/PageObject.spec.js");

export class PageAction extends PageObject{
   
    /**
* @param {import('playwright/test').Page} page 
* @param {import('playwright/test').expect} expect
* 
 */

    constructor(page,expect)
    {
        super(page,expect) 
  
    }
    async enterusername(username)
    {
        await this.username.fill(username)
        //await this.page.fill(this.username,username)
    }
    async enterpassword(password)
    {
           await this.password.fill(password)   
       // await this.page.fill(this.password,password)
    }
    async clickloginbutton()
    {
        await this.loginbutton.click()
        //await this.page.click(this.loginbutton)
    }

    async addtocartmethod()
    {
        await this.addtocart.click();
    }

    async shoppingiconmethod()
    {
        await this.shoppingicon.click();
    }
    async checkoutbuttonmethod()
    {
        await this.checkoutbutton.click();
    }
    async firstnamemethod(firstname)
    {
        await this.firstname.fill(firstname);
    }
    async lastnamemethod(lastname)
    {
        await this.lastname.fill(lastname);
    }
    async zipcodemethod(zipcode)
    {
        await this.zipcode.fill(zipcode);
    }
    async continuebuttonmethod()
    {
        await this.continuebutton.click();
    }
    async finishbuttonmethod()
    {
        await this.finishbutton.click();
    }
    async backtohomemethod()
    {
        await this.backtohome.click();
    }
    async waitforsometime(seconds)
    {
        await this.page.waitForTimeout(seconds);
        
    }
}