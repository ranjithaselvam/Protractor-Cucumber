import { When, Then, TableDefinition, Before, After } from "cucumber";
import { browser, element, by } from "protractor";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
import { ElementHelper } from "../helper/commonUtility";
import { expect } from 'chai';

//var expect = chai.expect;
let helper = new ElementHelper();
let mainNavigationLoc = new PropertiesFileReader(FilePath.mainNavigation);
let dashboardLoc = new PropertiesFileReader(FilePath.dashboard)



/**Scenario 1 */
// When(/^Open the website "([^"]*)"$/, { timeout: 20000 }, async (url) => {
//    await browser.manage().window().maximize();
//    await browser.get(url);
// });

When(/^Click all the tab in main navigation$/, { timeout: 20000 }, async () => {


   await helper.allElement(mainNavigationLoc.propertiesFileData('loc.tab.navigations')).each(function (label: any) {
      label.click();
console.log("sucessfully");

   });
});

   // Then(/^verify all the tab page navigation$/, { timeout: 50000 }, async (table: TableDefinition) => {
   //    var expectedUrl = table.rowsHash();
   //    // expect(browser.getCurrentUrl()).to.contains(expectedUrl.productsnapshot)
   //    await browser.navigate().back();
   //    await browser.getCurrentUrl().then(getUrl => {
   //       expect(getUrl).to.contains(expectedUrl.view)
   //    });
   //    await browser.navigate().back();
   //    await browser.getCurrentUrl().then(getUrl => {
   //       expect(getUrl).to.contains(expectedUrl.recentrun)
   //    });
   //    await browser.navigate().back();

   //    await browser.getCurrentUrl().then(getUrl => {
   //       expect(getUrl).to.contains(expectedUrl.dashboard)
   //    });
   // });


   // /**Scenario 2 */
   Then(/^verify whether all the project available on the dashboard page$/, { timeout: 20000 }, async () => {
    //  var expectedItem = table.rowsHash();

      await helper.allElement(dashboardLoc.propertiesFileData('loc.txt.listOfItem')).getText().then(function (allItem) {
         console.log("list of item :" + allItem.length);
         
       //  console.log("splitte :" + expectedItem.listOfProject.split(" "));
        // console.log("expected :" + expectedItem.listOfProject.length)

      });
   });



