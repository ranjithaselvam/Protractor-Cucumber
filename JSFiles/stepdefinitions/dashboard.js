"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
// const expect=require("chai").expect;
const dashboardloc = __importStar(require("C:/Users/ranjitha.selvam/Desktop/Atmecs/locators/dashboardloc.json"));
const commonUtility_1 = require("../helper/commonUtility");
// import { BasePage } from '../pages/basepage'
// import { OpenDashboardPage } from '../pages/DashboardPage'
var _ = require('lodash');
var loc = new commonUtility_1.ElementHelper();
// new BasePage().clickOnDashboardTab
// let openDashboardPage=new OpenDashboardPage();
// openDashboardPage.selectTest();
// openDashboardPage.selectCustomer();
// openDashboardPage.selectmodules();
// openDashboardPage.selectStatus();
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        protractor_1.browser.getCurrentUrl().then(function (actualurl) {
            console.log(actualurl),
                chai_1.expect(url).to.be.equals(actualurl);
        });
    });
});
cucumber_1.Then(/^Page Title should be "([^"]*)"$/, { timeout: 70000 }, function (expectedtitle) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getTitle().then((title) => {
            console.log("Title is :" + title);
            chai_1.expect(expectedtitle).to.be.equals(title);
        });
    });
});
// /*SCENARIO :1 */
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
        yield protractor_1.element(protractor_1.by.xpath(dashboardloc.restAPI)).click();
    });
});
cucumber_1.When(/^Select status as pass$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath(dashboardloc.status)).$(dashboardloc.pass).click();
    });
});
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 70000 }, function (table) {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css(dashboardloc.passtestcase)).getText();
        console.log(status);
        var detail = table.raw();
        detail.forEach(function (value) {
            console.log("expec :" + value);
            // expect(detail).to.be.equals(value)
        });
        //expect(status).to.be.equals(detail.Test Case Name );
    });
});
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css(dashboardloc.toggle)).click();
        protractor_1.browser.sleep(10000);
    });
});
// Then(/^User can able to view total test run count$/,{ timeout: 100000 }, async function () {
// 	var test=	await element(by.xpath((<any>dashboardloc).totaltest)).getText();
// console.log("total test :"+test)
// });
// Then(/^User can able to view pass test percentage$/, { timeout: 100000 }, async function () {
// 	var pass=await element(by.xpath((<any>dashboardloc).passtest)).getText();
// console.log("total test case Pass :"+pass)
// });
// Then(/^User can able to view fail test count$/, { timeout: 100000 }, async function () {
// 	var fail=await element(by.xpath((<any>dashboardloc).failtest)).getText();
// console.log("total test case Fail :"+fail)
// });
// Then(/^User can able to view skip test count$/, { timeout: 100000 }, async function () {
// 	var skip=await element(by.xpath((<any>dashboardloc).skiptest)).getText();
// console.log("total test case Skip :"+skip)
// });
// Then(/^User can able to view total test case status$/, (table:TableDefinition) => {
//     var rows=table.hashes();
//     _.each(rows,function(row:any)
//     {
//        console.log(row.status+" "+row.details)
//     })
// });
cucumber_1.Then(/^User can able to view test status$/, { timeout: 100000 }, function (table) {
    return __awaiter(this, void 0, void 0, function* () {
        var actualtest = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.totaltest)).getText();
        var actualpass = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.passtest)).getText();
        var actualfail = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.failtest)).getText();
        var actualskip = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.skiptest)).getText();
        //    var rows=table.hashes();
        //    _.each(rows,function(row:any)
        //     {
        //       console.log(row.status+" "+row.details)
        //      })
        var expected = table.rowsHash();
        chai_1.expect(actualtest).to.be.equals(expected.testrun);
        chai_1.expect(actualpass).to.be.equals(expected.pass);
        chai_1.expect(actualfail).to.be.equals(expected.fail);
        chai_1.expect(actualskip).to.be.equals(expected.skip);
        // expect(pass1).to.be.equals(row.pass)
        // expect(fail1).to.be.equals(row.fail)
        // expect(skip1).to.be.equals(row.skip)
    });
});
// /*SCENARIO :2 */
// When(/^Click on recent run$/,  { timeout: 100000 }, async function () {
//     await element(by.css((<any>recentrunloc).recentrun)).click();
// });
// When(/^Select product$/,  { timeout: 100000 }, async function () {
//     await element(by.xpath((<any>recentrunloc).product)).click();
// });
// When(/^Select test case$/,  { timeout: 100000 }, async function () {
//     await element(by.xpath((<any>recentrunloc).testcase)).click();
// });
// Then(/^User can view the tesct case details$/,  { timeout: 100000 }, async function () {
//  var status=   await element(by.css((<any>recentrunloc).testdetails)).getText();
// 	console.log("Status :"+status);
// });
// this.Then(/^I should see my new task in the list$/, function(callback) {
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).to.eventually.equal(3);
//     expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
//       .and.notify(callback);
//   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx1Q0FBNEU7QUFDNUUsMkNBQW9EO0FBQ3BELCtCQUEyQjtBQUMzQix1Q0FBdUM7QUFDdkMsaUhBQXlHO0FBRXpHLDJEQUF3RDtBQUN4RCwrQ0FBK0M7QUFDL0MsNkRBQTZEO0FBQzdELElBQUksQ0FBQyxHQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQTtBQUc3QixxQ0FBcUM7QUFDckMsaURBQWlEO0FBQ2pELGtDQUFrQztBQUNsQyxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUVwQyxnQkFBSyxDQUFDLGtDQUFrQyxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDbkMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFDckUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFNBQVM7WUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDeEUsYUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FB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