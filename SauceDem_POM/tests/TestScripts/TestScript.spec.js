const { test,expect } = require('@playwright/test');
const { PageAction } = require('../PageActions/PageAction.spec.js');



test.describe('Sauce Demo', () => {
  test('SauceDemo test', async ({ page }) => {

    const pageActionRef = new PageAction(page,expect);
    
    
    await pageActionRef.launchbrowserandgotourl('https://www.saucedemo.com/');
    await pageActionRef.enterusername('standard_user');
    // await pageActionRef.waitforsometime(3000);

    await pageActionRef.enterpassword('secret_sauce');
    // await pageActionRef.waitforsometime(3000);

    await pageActionRef.clickloginbutton();
    await pageActionRef.waitforsometime(3000);

    await pageActionRef.addtocartmethod();
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.shoppingiconmethod();
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.checkoutbuttonmethod();
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.firstnamemethod('Reshma');
    await pageActionRef.lastnamemethod('Gade');
    await pageActionRef.zipcodemethod('123456');
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.continuebuttonmethod();
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.finishbuttonmethod();
    await pageActionRef.waitforsometime(3000);
    await pageActionRef.backtohomemethod();
   // await pageActionRef.waitforsometime(3000);



    await pageActionRef.closebrowser();
  });

  
});