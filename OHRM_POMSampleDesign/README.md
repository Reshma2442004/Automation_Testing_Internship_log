# OHRM_POMSampleDesign

A Playwright end-to-end test automation framework built in JavaScript using the **Page Object Model (POM)** design pattern (separated into Base Library, Page Objects, Page Actions, and Test Scripts) for testing **OrangeHRM** (`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`).

## Project Structure

```text
OHRM_POMSampleDesign/
├── .github/
│   └── workflows/
│       └── playwright.yml            # GitHub Actions CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js         # Common browser & wait helpers (launch, wait, close)
│   ├── PageObjects/
│   │   ├── LoginPageObject.spec.js   # Locators for the Login page
│   │   ├── MyInfoObject.spec.js      # Locators for the My Info -> Personal Details page
│   │   └── AdminPageObject.spec.js   # Locators for the Admin module (search, add, delete)
│   ├── PageActions/
│   │   ├── LoginPageAction.spec.js   # Action methods for Login operations
│   │   ├── MyInfoPageAction.spec.js  # Action methods for My Info operations
│   │   └── AdminPageAction.spec.js   # Action methods for Admin operations
│   └── TestScripts/
│       ├── LoginTestScript.spec.js   # Test suite for Login flow
│       ├── MyInfoTestScript.spec.js  # Test suite for My Info Personal Details update
│       └── AdminTestScript.spec.js   # Test suite for Admin Add, Search & Delete user flow
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js              # Playwright configuration (Chromium, Firefox, WebKit)
```

## Implemented Modules & Operations

### 1. Login Operation
- **Page Object:** `tests/PageObjects/LoginPageObject.spec.js` (`LoginPage`)
- **Page Action:** `tests/PageActions/LoginPageAction.spec.js` (`LoginAction`)
- **Test Script:** `tests/TestScripts/LoginTestScript.spec.js`
- **Operations Covered:**
  - Launch the browser and navigate to the OrangeHRM login URL.
  - Enter username and password (`enterusername`, `enterpassword`).
  - Click the Login submit button (`clickloginbutton`).
  - Close the browser session after execution (`closebrowser`).

### 2. My Info Page Operation
- **Page Object:** `tests/PageObjects/MyInfoObject.spec.js` (`MyinfopageObject`)
- **Page Action:** `tests/PageActions/MyInfoPageAction.spec.js` (`MyInfoAction`)
- **Test Script:** `tests/TestScripts/MyInfoTestScript.spec.js`
- **Operations Covered:**
  - Log in to OrangeHRM and assert redirection to the Dashboard URL (`/.*dashboard/`).
  - Navigate to **My Info** (`clickMyinfo`) and open **Personal Details** (`clickPersonaldetail`).
  - Update **First Name** (`enterFname`), **Middle Name** (`entermname`), and **Last Name** (`enterlname`).
  - Click **Save** (`Saveinfo`) and verify the success toast notification (`checkSaved` contains `Success`).

### 3. Admin Page Operation
- **Page Object:** `tests/PageObjects/AdminPageObject.spec.js` (`AdminPage`)
- **Page Action:** `tests/PageActions/AdminPageAction.spec.js` (`AdminAction`)
- **Test Script:** `tests/TestScripts/AdminTestScript.spec.js`
- **Operations Covered:**
  - Log in as `Admin` and navigate to the **Admin** module (`clickOnAdminMenu`).
  - **Add User:** Open the Add User form (`clickAddButton`), select **User Role** (`selectUserRole`), fill **Employee Name** via autocomplete (`enterEmployeeName`), select **Status** (`selectStatus`), enter a unique username, password, and confirm password, and save (`clickSaveButton`).
  - **Search User:** Filter system users by username (`enterUsername`, `clickSearchButton`) — with reset support (`clickResetButton`) also available in `AdminAction`.
  - **Delete User:** Delete the matching user record via row trash icon (`clickDeleteButton`) and confirm in the modal (`Yes, Delete`) — with checkbox + `Delete Selected` support (`deleteUsingCheckbox`) also implemented in `AdminAction`.
  - **Verification:** Wait for and verify the `Successfully Deleted` toast popup (`verifyDeleteSuccessPopup`).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

## Setup & Running Tests

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Run all tests:**
   ```bash
   npx playwright test
   ```

4. **Run a specific test script:**
   ```bash
   npx playwright test tests/TestScripts/LoginTestScript.spec.js
   npx playwright test tests/TestScripts/MyInfoTestScript.spec.js
   npx playwright test tests/TestScripts/AdminTestScript.spec.js
   ```

5. **View the HTML test report:**
   ```bash
   npx playwright show-report
   ```
