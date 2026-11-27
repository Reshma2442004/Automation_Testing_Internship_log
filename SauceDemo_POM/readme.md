# SauceDemo_POM

A Playwright end-to-end test automation framework built in JavaScript using the **Page Object Model (POM)** design pattern (separated into Base Class, Page Objects, Page Actions, and Test Scripts) for testing **SauceDemo** (`https://www.saucedemo.com/`).

## Project Structure

```text
SauceDemo_POM/
├── .github/
│   └── workflows/
│       └── playwright.yml                # GitHub Actions CI workflow for Playwright tests
├── tests/
│   ├── BaseClass/
│   │   └── BaseClass.spec.js             # Common browser & wait helpers (launch, wait, close)
│   ├── PageObjects/
│   │   └── PageObject.spec.js            # Locators for Login, Inventory, Cart & Checkout pages
│   ├── PageActions/
│   │   └── PageAction.spec.js            # Action methods for Login, Cart & Checkout operations
│   ├── TestScripts/
│   │   └── TestScript.spec.js            # End-to-end SauceDemo test suite
│   └── example.spec.js                   # Default Playwright starter tests
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js                  # Playwright configuration (Chromium, Firefox, WebKit)
├── readme.md
├── SauceDemo.docx                        # Project documentation
└── SauceDemoAssignment.pdf               # Assignment specification
```

## Architecture & Implemented Flow

The framework follows a four-layer inheritance structure: `BaseClass` -> `PageObject` -> `PageAction` -> `TestScript`.

### 1. Base Class (`tests/BaseClass/BaseClass.spec.js`)
- `launchbrowserandgotourl(url)`: Navigates to the target URL.
- `waitforsometime(time)`: Waits for the specified timeout in milliseconds.
- `closebrowser()`: Closes the active browser page.

### 2. Page Objects (`tests/PageObjects/PageObject.spec.js`)
Extends `BaseClass` and defines XPath locators for:
- **Login:** `username`, `password`, `loginbutton`
- **Products & Cart:** `addtocart` (Sauce Labs Backpack), `shoppingicon`
- **Checkout:** `checkoutbutton`, `firstname`, `lastname`, `zipcode`, `continuebutton`, `finishbutton`, `backtohome`

### 3. Page Actions (`tests/PageActions/PageAction.spec.js`)
Extends `PageObject` and wraps locator interactions into reusable methods:
- **Login:** `enterusername`, `enterpassword`, `clickloginbutton`
- **Cart:** `addtocartmethod`, `shoppingiconmethod`
- **Checkout:** `checkoutbuttonmethod`, `firstnamemethod`, `lastnamemethod`, `zipcodemethod`, `continuebuttonmethod`, `finishbuttonmethod`, `backtohomemethod`

### 4. Test Script (`tests/TestScripts/TestScript.spec.js`)
Executes the `Sauce Demo` (`SauceDemo test`) end-to-end flow:
1. Launch the browser and open `https://www.saucedemo.com/`.
2. Log in with `standard_user` credentials.
3. Add **Sauce Labs Backpack** to the cart and navigate to the shopping cart.
4. Proceed to checkout, enter customer information (First Name, Last Name, Zip/Postal Code), and click **Continue**.
5. Click **Finish** to complete the order, return to the products page via **Back Home**, and close the browser.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

## Setup & Running Tests

From the `SauceDemo_POM` directory:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Run all tests (Chromium, Firefox, and WebKit):**
   ```bash
   npx playwright test
   ```

4. **Run the SauceDemo end-to-end test script:**
   ```bash
   npx playwright test tests/TestScripts/TestScript.spec.js
   ```

5. **Run in headed mode or on a single browser:**
   ```bash
   npx playwright test tests/TestScripts/TestScript.spec.js --project=chromium --headed
   ```

6. **View the HTML test report:**
   ```bash
   npx playwright show-report
   ```

## CI/CD

GitHub Actions is configured in `.github/workflows/playwright.yml` to run Playwright tests automatically on pushes and pull requests to `main` and `master`, and upload the generated `playwright-report/` as a workflow artifact.
