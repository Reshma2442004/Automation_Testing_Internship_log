

const { test,expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageAction.spec.js');
const { AdminAction } = require('../PageActions/AdminPageAction.spec.js');

test.describe('Admin Module Tests', () => {
    test('Verify Admin Page Search and Delete Record with Success Popup', async ({ page }) => {
        const testUsername = 'Reshma_' + Math.floor(Math.random() * 100000);

        // 1. Launch browser and Login
        const loginActionRef = new LoginAction(page, expect);
        await loginActionRef.launchbrowserandgotourl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginActionRef.enterusername('Admin');
        await loginActionRef.enterpassword('admin123');
        await loginActionRef.clickloginbutton();
        await loginActionRef.waitforsometime(1000);

        // 2. Navigate to Admin Menu
        const adminActionRef = new AdminAction(page, expect);
        await adminActionRef.clickOnAdminMenu();
        await adminActionRef.waitforsometime(1000);

        // 3. Add a User
        await adminActionRef.clickAddButton();
        await adminActionRef.waitforsometime(1000);

        await adminActionRef.selectUserRole('Admin');
        await adminActionRef.waitforsometime(1000);

        await adminActionRef.enterEmployeeName('k');
        await adminActionRef.waitforsometime(1000);

        await adminActionRef.selectStatus('Enabled');
        await adminActionRef.waitforsometime(1000);

        await adminActionRef.enterUsername(testUsername);
        // await adminActionRef.waitforsometime(1000);

        await adminActionRef.enterPassword('Password@123');
        await adminActionRef.enterConfirmPassword('Password@123');
        // await adminActionRef.waitforsometime(1000);

        // Save 
        await adminActionRef.clickSaveButton();
      //  await adminActionRef.waitforsometime(1000);
        // 4. Search
        await adminActionRef.enterUsername(testUsername);
        await adminActionRef.clickSearchButton();
        // await adminActionRef.waitforsometime(1000);

        // 5. Delete 
        await adminActionRef.clickDeleteButton();

        // 6. Successfully Deleted
        await adminActionRef.verifyDeleteSuccessPopup();

        //wait
        // await adminActionRef.waitforsometime(1000);

        // 7. Close Browser 
        await loginActionRef.closebrowser();
    });
});
