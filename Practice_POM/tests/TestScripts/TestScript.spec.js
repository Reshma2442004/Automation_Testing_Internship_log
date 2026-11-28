const { test,expect } = require('@playwright/test');
const { PageAction } = require('../PageActions/PageAction.spec.js');



test.describe('Sauce Demo', () => {
  test('SauceDemo test', async ({ page }) => {

    const pageActionRef = new PageAction(page,expect);
    await pageActionRef.launchbrowserandgotourl('https://the-internet.herokuapp.com/dynamic_loading/1');
    await  pageActionRef.startbuttonload();
    await pageActionRef.loadingimage();
    await pageActionRef.helloworldtext();
    await pageActionRef.closebrowser();
  });

  
});