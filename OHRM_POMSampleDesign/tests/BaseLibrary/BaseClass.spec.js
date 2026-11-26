
// export class BaseClass{
 
// /**
// * @param {import('playwright/test').Page} page 
// * @param {import('playwright/test').expect} expect
// * 
//  */


// constructor(page,expect)
// {
//     this.page=page;
//     this.expect=expect;
// }




//     //for any method we write async and for command we write await
//   async  launchbrowserandgotourl(url)
//     {
// await this.page.goto(url);
//     }


//     async isFieldFilled(locator) {
//     try {
//       await locator.waitFor({ state: 'visible' });
//       const spinner = this.page.locator('.oxd-loading-spinner');
//       if (await spinner.count() > 0) {
//         await spinner.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
//       }
//       return (await locator.inputValue()).trim().length > 0;
//     } catch (error) {
//       throw error;
//     }
//   }


//     async closebrowser()
//     {
//         await this.page.close();
//     }
// }




export class BaseClass {
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    // URL
    async launchbrowserandgotourl(url) {
        await this.page.goto(url);

    }

    async waitforsometime(time) {
        await this.page.waitForTimeout(time);
        
    }

  
    async closebrowser() {
        await this.page.close();
    }
}