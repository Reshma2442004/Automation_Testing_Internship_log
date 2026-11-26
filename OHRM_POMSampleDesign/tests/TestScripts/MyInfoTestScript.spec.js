
const { test,expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageAction.spec.js');
//const { AdminAction } = require('../PageActions/AdminPageAction.spec.js');
const { MyInfoAction } = require('../PageActions/MyInfoPageAction.spec.js')

test.describe("My Info Page Test Scenarios", () => {
  test("to verify add name details", async ({ page }) => {
    const loginAction = new LoginAction(page);
    const myinfoAction = new MyInfoAction(page);

       await loginAction.launchbrowserandgotourl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await loginAction.enterusername('admin');
     await loginAction.enterpassword('admin123');
     await loginAction.clickloginbutton();
     await page.waitForTimeout(2000);

    // await loginAction.login('Admin', 'admin123');
    // await page.waitForTimeout(2000);

    await expect(page).toHaveURL(/.*dashboard/);
    await page.waitForTimeout(2000);

    await myinfoAction.clickMyinfo();
    await page.waitForTimeout(2000);

    await myinfoAction.clickPersonaldetail();
    await page.waitForTimeout(2000);

    await myinfoAction.enterFname("Reshma");
    await page.waitForTimeout(2000);

    await myinfoAction.entermname("Vishwas");
    await page.waitForTimeout(2000);

    await myinfoAction.enterlname("Gade");
    await page.waitForTimeout(2000);

    await myinfoAction.Saveinfo();
    await page.waitForTimeout(2000);

    const result = await myinfoAction.checkSaved();
    expect(result).toContain('Success');
  });
});