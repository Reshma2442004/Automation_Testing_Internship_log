
import { AdminPage } from '../PageObjects/AdminPageObject.spec';

export class AdminAction extends AdminPage {
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page, expect) {
        super(page, expect);
    }

    async clickOnAdminMenu() {
        await this.adminMenu.click();
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async selectUserRole(roleName) {
        await this.userRoleDropdown.click();
        await this.selectRoleOption(roleName).click();
    }

    async enterEmployeeName(name) {
        await this.employeeNameInput.fill(name);
        await this.realEmployeeOption.waitFor({ state: 'visible', timeout: 9000 });
        await this.realEmployeeOption.click();
    }

    async selectStatus(status) {
        await this.statusDropdown.click();
        await this.selectStatusOption(status).click();
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }

    async clickResetButton() {
        await this.resetButton.click();
    }

    // Add User Actions
    async clickAddButton() {
        await this.addButton.click();
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async enterConfirmPassword(password) {
        await this.confirmPasswordInput.fill(password);
    }

    // Save and wait until returned to Admin table page
    async clickSaveButton() {
        await this.saveButton.click();
        await this.page.waitForURL('**/admin/viewSystemUsers');
        await this.page.waitForTimeout(5000);
    }

    // Method 1: Delete using Trash icon on the row
    async clickDeleteButton() {
        await this.firstRowDeleteButton.waitFor({ state: 'visible' });
        await this.firstRowDeleteButton.click();
        // Wait 2 seconds so the confirmation popup is clearly visible
        await this.page.waitForTimeout(2000);
        await this.confirmDeleteButton.waitFor({ state: 'visible' });
        await this.confirmDeleteButton.click();
    }

    // Method 2: Select Checkbox and click 'Delete Selected'
    async deleteUsingCheckbox() {
        await this.firstRowCheckbox.waitFor({ state: 'visible' });
        await this.firstRowCheckbox.click();
        await this.page.waitForTimeout(1500);
        await this.deleteSelectedButton.waitFor({ state: 'visible' });
        await this.deleteSelectedButton.click();
        // Wait 2 seconds so the confirmation popup is clearly visible
        await this.page.waitForTimeout(2000);
        await this.confirmDeleteButton.waitFor({ state: 'visible' });
        await this.confirmDeleteButton.click();
    }

    // Wait and verify 'Successfully Deleted' popup
    async verifyDeleteSuccessPopup() {
        await this.successToast.waitFor({ state: 'visible', timeout: 9000 });
    }
}
