
import { Given, When, Then, TableDefinition } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from 'chai';
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";

import { TIMEOUT } from "dns";
import { get } from "http";


var _ = require('lodash');
let helper = new ElementHelper();





Given(/^User launch the chrome browser$/, { timeout: 40000 }, async function () {
    console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    await browser.manage().window().maximize();
});

When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, async function (url) {
    await browser.get(url);
    await browser.getCurrentUrl().then(function (actualurl) {
        expect(url).to.be.equals(actualurl)
    });

});
When(/^select view tab in main naviagtion$/, { timeout: 250000 }, async () => {
    
   var exe= element(by.css("a[ng-href='#/reports/'] > span"));
   browser.actions().mouseMove(exe).click().perform();
    // viewPage.clickOnViewTab();
    //  WebElement element = driver.findElement(By.<locator>);



    // //  await element (by.cssContainingText('option','Fail')).click();
    // //  await element (by.cssContainingText('option','Skip')).click();
    // await element.all(by.xpath("//select[@name='status']")).then(function(select)
    // {
    //     for(var i=0;i<=select.length;i++)
    //     {
    //         get(select[i]);
    //         console.log("value :"+select[i]);
    //     }
    // })

});
When(/^filter the status as pass in select status$/, { timeout: 70000}, async () => {
    
//    var exe=  element(by.cssContainingText('option', 'Pass'));
//    browser.actions().mouseMove(exe).click().perform();
await element(by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    // viewPage.filterStatusAsPass();
})



Then(/^able to get pass test cases$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
    await element(by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (passStatus) {
        console.log("total pass :" + passStatus);
    })

    //  viewPage.getAllPassStatus();
    var exepass = table.hashes();
    _.each(exepass, function (passrow: any) {
        console.log("expected data:" + passrow.Status);

    })

});


When(/^filter the status as fail in select status$/, { timeout: 70000 }, async () => {
    await browser.manage().timeouts().implicitlyWait(15000);
    await element(by.cssContainingText('option', 'Fail')).click();
});

Then(/^able to get fail test case$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
    await element(by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (failStatus) {
        console.log("total fail :" + failStatus);
    })
    var exefail = table.rows();
    exefail.forEach(function (value) {
        console.log("Total fail :" + value[2]);
    })

});



Then(/^filter the status as skip in the select status$/, { timeout: 50000 }, async () => {
    
    await element(by.cssContainingText('option', 'Skip')).click();
});

Then(/^able to get skip test case$/, { timeout: 70000 }, async (table: TableDefinition) => {
    
    await element(by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (skipStatus) {
        console.log("total skip :" + skipStatus);
    })
    var exeSkip = table.rows();
    exeSkip.forEach(function (values) {
        console.log("Total fail :" + values[0]);
    })

});
