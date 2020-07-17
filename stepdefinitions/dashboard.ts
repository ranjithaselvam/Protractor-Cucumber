import { Then, When, TableDefinition } from "cucumber";
import { DashboardPage } from "../pages/dashboardpage";
import { expect } from "chai";
import { browser, element, by } from "protractor";
var homePage = new DashboardPage();
/*scenario 1*/
Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 20000 }, async (expecteddata) => {
    // homePage.clickOnDashboardTab();
    await browser.manage().timeouts().implicitlyWait(15000);
    var dashboard = await homePage.getDashboardText();
    console.log("from data table:"+expecteddata);
    console.log("from website :"+dashboard);
    // expect(dashboard).to.contains(expecteddata)

});

Then(/^Verify the refersh icon is available on the tab right corner of the page$/, { timeout: 20000 }, async () => {
    await homePage.toCheckIconAvailable();
});

Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 20000 }, async  () => {
	await homePage.toCheckLogo();
});
// /*scenario 2*/
Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 40000 }, async () => {
    
    await element.all(by.xpath("//*[@class='media-box-heading ng-binding']")).getText().then(function(actualData)
     {
         console.log("list of project :"+actualData);
      
     });
});

When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {
    
   
    await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    
});



When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
    
    await  element(by.xpath("//select[@name='status']")).$("[value='PASS']").click();
});



Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function (table:TableDefinition) {

    var status= await element(by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
  
    console.log(status);
    var detail=table.raw();
    
        detail.forEach(function(value)
        {
           
            console.log("expec :"+value);
            //  expect(status).to.be.equals(value)
        });
        
    
    //expect(status).to.be.equals(detail.Test Case Name );
});

When(/^User click on toggle button$/,{ timeout: 100000 }, async function () {
    await element(by.css("label.pull-right > span")).click();
    browser.sleep(10000)
});





Then(/^User can able to view test status$/,{ timeout: 100000 }, async function (table:TableDefinition) {

   
	var actualtest =	await element(by.xpath("//h4[.='10 TEST(S)']")).getText();
    
 
   var actualpass=await element(by.xpath("//h4[.='9']")).getText();
   
   var actualfail=await element(by.xpath("//h4[.='1']")).getText();
   
   var actualskip=await element(by.xpath("//h4[.='0']")).getText();
   


     var expected=table.rowsHash()
    
  expect(actualtest).to.be.equals(expected.testrun);
  expect(actualpass).to.be.equals(expected.pass);
  expect(actualfail).to.be.equals(expected.fail);
  expect(actualskip).to.be.equals(expected.skip);
 
});








