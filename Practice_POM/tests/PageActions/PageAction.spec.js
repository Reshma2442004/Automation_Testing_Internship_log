//const { LoginPage } = require("../PageObjects/LoginPageObject.spec.js");
const { PageObject } = require("../PageObjects/PageObject.spec.js");
const { test,expect } = require('@playwright/test');

class PageAction extends PageObject{
   
    /**
* @param {import('playwright/test').Page} page 
* @param {import('playwright/test').expect} expect
* 
 */

    constructor(page,expect)
    {
        super(page,expect) 
  
    }
    async startbuttonload()
    {
        await this.startbutton.click();
    }

    async loadingimage()
    {
        //await this.loadingimg;
        await expect(this.loadingimg).toBeVisible();
    }
    async helloworldtext()
    {
        await expect(this.helloworld).toBeVisible();
        const actualText = await this.helloworld.textContent();
        
        console.log(actualText);
    }

    async waitforsometime(seconds)
    {
        await this.page.waitForTimeout(seconds);
        
    }
}

module.exports = { PageAction };
