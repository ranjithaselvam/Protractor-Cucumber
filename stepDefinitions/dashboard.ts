


import { Given, When, Then, After, Before, TableDefinition } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import {expect} from 'chai'
// const expect=require("chai").expect;
import value, * as dashboardloc from 'C:/Users/ranjitha.selvam/Desktop/Atmecs/locators/dashboardloc.json'
import * as recentrunloc from 'C:/Users/ranjitha.selvam/Desktop/Atmecs/locators/recentrunloc.json'
import { ElementHelper } from '../helper/commonUtility';
// import { BasePage } from '../pages/basepage'
// import { OpenDashboardPage } from '../pages/DashboardPage'
var _=require('lodash')
var loc = new ElementHelper()


// new BasePage().clickOnDashboardTab
// let openDashboardPage=new OpenDashboardPage();
// openDashboardPage.selectTest();
// openDashboardPage.selectCustomer();
// openDashboardPage.selectmodules();
// openDashboardPage.selectStatus();

Given(/^User launch the chrome browser$/,{ timeout: 40000 }, async function (){
	console.log("Step 1: Browser opening")
    browser.waitForAngularEnabled(true);
    browser.manage().window().maximize();
});

When(/^User opens URL "([^"]*)"$/,{ timeout: 70000 }, async function (url) {
    await browser.get(url);
    browser.getCurrentUrl().then(function(actualurl) {console.log(actualurl),
    expect(url).to.be.equals(actualurl)});
    
});



Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, async function (expectedtitle){
    
  await browser.getTitle().then((title)=>
    {
     console.log("Title is :"+title)
     expect(expectedtitle).to.be.equals(title)
    })
});


// /*SCENARIO :1 */

When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, async function () {
    
    // await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    await element(by.xpath((<any>dashboardloc).restAPI)).click();
    
});



When(/^Select status as pass$/,{ timeout: 70000 }, async function () {
    
    await  element(by.xpath((<any>dashboardloc).status)).$((<any>dashboardloc).pass).click();
});



Then(/^Able to get pass test cases$/,{ timeout: 70000 }, async function (table:TableDefinition) {

	var status= await element(by.css((<any>dashboardloc).passtestcase)).getText();
    console.log(status);
    var detail=table.raw();
    
        detail.forEach(function(value)
        {
           
            console.log("expec :"+value);
            // expect(detail).to.be.equals(value)
        });
        
    
    //expect(status).to.be.equals(detail.Test Case Name );
});

When(/^User click on toggle button$/,{ timeout: 100000 }, async function () {
    await element(by.css((<any>dashboardloc).toggle)).click();
    browser.sleep(10000)
});




// Then(/^User can able to view total test case status$/, (table:TableDefinition) => {
//     var rows=table.hashes();
//     _.each(rows,function(row:any)
//     {
//        console.log(row.status+" "+row.details)
//     })
	
// });

Then(/^User can able to view test status$/,{ timeout: 100000 }, async function (table:TableDefinition) {

   
	var actualtest =	await element(by.xpath((<any>dashboardloc).totaltest)).getText();
    
 
   var actualpass=await element(by.xpath((<any>dashboardloc).passtest)).getText();
   
   var actualfail=await element(by.xpath((<any>dashboardloc).failtest)).getText();
   
   var actualskip=await element(by.xpath((<any>dashboardloc).skiptest)).getText();
   


//    var rows=table.hashes();
//    _.each(rows,function(row:any)
//     {
//       console.log(row.status+" "+row.details)
//      })
     var expected=table.rowsHash()
    
  expect(actualtest).to.be.equals(expected.testrun);
  expect(actualpass).to.be.equals(expected.pass);
  expect(actualfail).to.be.equals(expected.fail);
  expect(actualskip).to.be.equals(expected.skip);
  
// expect(pass1).to.be.equals(row.pass)
// expect(fail1).to.be.equals(row.fail)
// expect(skip1).to.be.equals(row.skip)

});

/*SCENARIO :2 */

When(/^Click on recent run$/,  { timeout: 100000 }, async function () {
    await element(by.css((<any>recentrunloc).recentrun)).click();
});


When(/^Select product$/,  { timeout: 100000 }, async function () {
    await element(by.xpath((<any>recentrunloc).product)).click();
    
});
When(/^Select test case$/,  { timeout: 100000 }, async function () {
   
    await element(by.xpath((<any>recentrunloc).testcase)).click();
});

Then(/^User can view the tesct case details$/,  { timeout: 100000 }, async function () {
 var status=   await element(by.css((<any>recentrunloc).testdetails)).getText();
	console.log("Status :"+status);
});





// this.Then(/^I should see my new task in the list$/, function(callback) {
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).to.eventually.equal(3);
//     expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
//       .and.notify(callback);
//   });











