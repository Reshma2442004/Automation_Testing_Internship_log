# Practice_POM

A Playwright end-to-end test automation practice project built in JavaScript using the **Page Object Model (POM)** design pattern (separated into Base Library, Page Objects, Page Actions, and Test Scripts) for mentor-assigned automation tasks.

## Tasks

### Task 1: Dynamic Loading Verification
- **Target URL:** `https://the-internet.herokuapp.com/dynamic_loading/1`
- **Objective:** Automate the dynamic loading flow (hidden element revealed after async loading), verify the loading indicator appears, and assert that the `"Hello World!"` message becomes visible.
- **Test Script:** `tests/TestScripts/TestScript.spec.js`
- **Steps Automated:**
  1. Launch the browser and navigate to `https://the-internet.herokuapp.com/dynamic_loading/1` (`launchbrowserandgotourl`).
  2. Click the **Start** button (`startbuttonload`).
  3. Verify that the loading spinner image (`ajax-loader.gif`) is visible (`loadingimage`).
  4. Verify that the `"Hello World!"` heading becomes visible, capture its text content, and print it so the text is also visible in the console output (`helloworldtext`).
  5. Close the browser page (`closebrowser`).

## Project Structure

```text
Practice_POM/
├── .github/
│   └── workflows/
│       └── playwright.yml                # GitHub Actions CI workflow for Playwright tests
├── tests/
│   ├── BaseLibrary/
│   │   └── BaseClass.spec.js             # Common browser & wait helpers (launch, wait, close)
│   ├── PageObjects/
│   │   └── PageObject.spec.js            # XPath locators for Dynamic Loading page elements
│   ├── PageActions/
│   │   └── PageAction.spec.js            # Action & assertion methods for Task 1
│   ├── TestScripts/
│   │   └── TestScript.spec.js            # Test script executing Task 1
│   └── example.spec.js                   # Default Playwright starter tests
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js                  # Playwright config (90s timeout, Chromium, Firefox, WebKit)
└── readme.md
```

## Framework Architecture

The project follows a four-layer inheritance pattern: `BaseClass` -> `PageObject` -> `PageAction` -> `TestScript`.

### 1. Base Library (`tests/BaseLibrary/BaseClass.spec.js`)
- `launchbrowserandgotourl(url)`: Navigates to the specified URL.
- `waitforsometime(time)`: Waits for the specified timeout in milliseconds.
- `closebrowser()`: Closes the active browser page.

### 2. Page Objects (`tests/PageObjects/PageObject.spec.js`)
Extends `BaseClass` and defines XPath locators:
- `startbutton`: Start button (`//div/button`)
- `loadingimg`: Loading spinner (`//img[@src='/img/ajax-loader.gif']`)
- `helloworld`: Result heading (`//h4[contains(text(),'Hello World!')]`)

### 3. Page Actions (`tests/PageActions/PageAction.spec.js`)
Extends `PageObject` and implements reusable actions and assertions:
- `startbuttonload()`: Clicks the Start button.
- `loadingimage()`: Asserts that `loadingimg` is visible.
- `helloworldtext()`: Asserts that `helloworld` is visible and logs its text content.
- `waitforsometime(seconds)`: Waits for the given duration in milliseconds.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

## Setup & Running Tests

From the `Practice_POM` directory:

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

4. **Run the Task 1 test script:**
   ```bash
   npx playwright test tests/TestScripts/TestScript.spec.js
   ```

5. **Run in headed mode on Chromium:**
   ```bash
   npx playwright test tests/TestScripts/TestScript.spec.js --project=chromium --headed
   ```

6. **View the HTML test report:**
   ```bash
   npx playwright show-report
   ```

## Configuration & CI/CD

- **Playwright Config (`playwright.config.js`):** Configured with a `90000` ms test timeout, parallel test execution, HTML reporting, trace collection on first retry (`on-first-retry`), and `chromium`, `firefox`, and `webkit` projects.
- **GitHub Actions (`.github/workflows/playwright.yml`):** Automatically installs dependencies and Playwright browsers, runs tests on pushes and pull requests to `main` and `master`, and uploads `playwright-report/` as an artifact.
