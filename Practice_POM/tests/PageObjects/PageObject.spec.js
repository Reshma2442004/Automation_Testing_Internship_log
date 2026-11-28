const { BaseClass } = require("../BaseLibrary/BaseClass.spec.js");

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
        
        this.startbutton=this.page.locator("xpath=//div/button");
        this.loadingimg=this.page.locator("xpath=//img[@src='/img/ajax-loader.gif']");
        this.helloworld=this.page.locator("xpath=//h4[contains(text(),'Hello World!')]");   

    }
}

