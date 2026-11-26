const { LoginPage } = require("../PageObjects/LoginPageObject.spec.js");

class LoginAction extends LoginPage{
   
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
    async waitforsometime(seconds)
    {
        await this.page.waitForTimeout(seconds);
        
    }
}

module.exports = { LoginAction };
