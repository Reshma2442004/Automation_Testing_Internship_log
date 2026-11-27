# Automation_Testing_Internship_log

A repository of end-to-end web automation testing projects built with **Playwright** and **JavaScript** using the **Page Object Model (POM)** design pattern.

## Repository Structure

```text
Automation_Testing_Internship_log/
├── OHRM_POMSampleDesign/       # Playwright POM framework for OrangeHRM
│   ├── .github/workflows/      # GitHub Actions CI workflow
│   ├── tests/
│   │   ├── BaseLibrary/        # BaseClass browser & wait helpers
│   │   ├── PageObjects/        # Page locators (Login, My Info, Admin)
│   │   ├── PageActions/        # Reusable page action methods
│   │   └── TestScripts/        # End-to-end test suites
│   ├── package.json
│   ├── playwright.config.js
│   └── README.md
└── SauceDemo_POM/              # Playwright POM framework for SauceDemo
    ├── .github/workflows/      # GitHub Actions CI workflow
    ├── tests/
    │   ├── BaseClass/          # BaseClass browser & wait helpers
    │   ├── PageObjects/        # Page locators (Login, Cart, Checkout)
    │   ├── PageActions/        # Reusable page action methods
    │   └── TestScripts/        # End-to-end test suite
    ├── package.json
    ├── playwright.config.js
    └── readme.md
```

## Projects

### 1. [OHRM_POMSampleDesign](./OHRM_POMSampleDesign/README.md)
- **Target Application:** OrangeHRM (`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
- **Design Pattern:** Page Object Model (`BaseClass` -> `PageObjects` -> `PageActions` -> `TestScripts`)
- **Automated Flows:**
  - **Login:** Authenticate into OrangeHRM (`LoginTestScript.spec.js`).
  - **My Info:** Update Personal Details and verify save confirmation (`MyInfoTestScript.spec.js`).
  - **Admin:** Add, search, and delete system users and verify deletion confirmation (`AdminTestScript.spec.js`).

### 2. [SauceDemo_POM](./SauceDemo_POM/readme.md)
- **Target Application:** SauceDemo (`https://www.saucedemo.com/`)
- **Design Pattern:** Page Object Model (`BaseClass` -> `PageObject` -> `PageAction` -> `TestScript`)
- **Automated Flows:**
  - **End-to-End Shopping & Checkout:** Log in as `standard_user`, add Sauce Labs Backpack to cart, open cart, fill checkout details, complete the order, and return home (`TestScript.spec.js`).

## Tech Stack

- **Test Framework:** [Playwright](https://playwright.dev/) (`@playwright/test`)
- **Language:** JavaScript (CommonJS)
- **Browsers Configured:** Chromium, Firefox, and WebKit
- **Reporting:** Playwright HTML Reporter
- **CI/CD:** GitHub Actions (`.github/workflows/playwright.yml` in each project)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Reshma2442004/Automation_Testing_Internship_log.git
   cd Automation_Testing_Internship_log
   ```

2. **Navigate into a project directory:**
   ```bash
   cd OHRM_POMSampleDesign
   # or
   cd SauceDemo_POM
   ```

3. **Install dependencies and Playwright browsers:**
   ```bash
   npm install
   npx playwright install
   ```

4. **Run tests:**
   ```bash
   npx playwright test
   ```

5. **View the HTML test report:**
   ```bash
   npx playwright show-report
   ```
