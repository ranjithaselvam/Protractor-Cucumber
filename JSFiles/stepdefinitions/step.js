"use strict";
// import { Given, When, Then } from 'cucumber'
// import { browser, element, by } from 'protractor'
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
// Given(/^Open the atmecs dashboard website and check the default tab selection$/, { timeout: 40000 }, async function () {
//     console.log("Browser launching")
//     browser.waitForAngularEnabled(true);
//     console.log("entered url")
//     await browser.get('http://10.10.10.231:8082/#/app/dashboard');
//    await browser.manage().window().maximize()
// });
// When(/^Click the rest api test result link and filter the status as pass $/, { timeout: 40000 }, async function (){
//     browser.manage().timeouts().implicitlyWait(10000);
//      element(by.xpath("//h4[.='REST API TEST RESULT']")).click;
//     var select=element(by.css("[name='customers']"))
//     select.$("[value='string:Falcon']").click();
//      element(by.css("[name='status']")).click
//     // const title=browser.getTitle
//     // console.log(title)
// });
// Then(/^ verify the user got the all pass status$/, { timeout: 40000 }, async function () {
//     console.log("hi")
//   var status= await element(by.css(".table.ng-table-rowselected.ng-scope.ng-table")).getText
//   console.log(status)
// });
// Given(/^Click recent run tab$/, { timeout: 40000 }, async function () {
//  await element(by.css("a[ng-href='#/recentruns/view'] > span")).click
// });
// When(/^select the product and testcase$/, { timeout: 40000 }, async function () {
//  await element(by.css("tbody > tr:nth-of-type(1) > [data-title='\'Product Name\'']")).click
//  await element(by.xpath("//td[contains(.,'deleteProjectApiTest')]")).click
// });
// Then(/^verify the status and detail.$/, { timeout: 40000 }, async function () {
// var statusDetail=	await element(by.css(".p-t-5")).getText
// console.log(statusDetail)
// });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given(/^Open the Falcon page$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        return protractor_1.browser.get('http://10.10.10.231:8082/#/app/dashboard');
    });
});
cucumber_1.When(/^Maximize the window$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("");
        return protractor_1.browser.manage().window().maximize();
        protractor_1.browser.sleep(40000);
    });
});
cucumber_1.Then(/^click on the page title$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        yield protractor_1.element(protractor_1.by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
        const title = yield protractor_1.browser.driver.getTitle();
        console.log("Website Title :" + title);
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='modules']")).click();
        console.log("Click happened");
        protractor_1.browser.sleep(12000);
        // await element(by.css("[name='customers']")).$("[value='string:Falcon']").click();
        //     select.$("[value='string:Falcon']").click();
        // await element(by.xpath("//select[@class='form-control ng-valid ng-touched ng-dirty ng-not-empty ng-valid-parse']")).click();
        // console.log("Option Selected")
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0Msb0RBQW9EOzs7Ozs7Ozs7OztBQUdwRCwySEFBMkg7QUFDM0gsdUNBQXVDO0FBQ3ZDLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMscUVBQXFFO0FBQ3JFLGdEQUFnRDtBQUVoRCxNQUFNO0FBS04sc0hBQXNIO0FBQ3RILHlEQUF5RDtBQUN6RCxrRUFBa0U7QUFDbEUsdURBQXVEO0FBQ3ZELG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsc0NBQXNDO0FBQ3RDLDRCQUE0QjtBQUc1QixNQUFNO0FBS04sNkZBQTZGO0FBQzdGLHdCQUF3QjtBQUN4QiwrRkFBK0Y7QUFDL0Ysd0JBQXdCO0FBRXhCLE1BQU07QUFPTiwwRUFBMEU7QUFDMUUsd0VBQXdFO0FBRXhFLE1BQU07QUFFTixvRkFBb0Y7QUFDcEYsOEZBQThGO0FBQzlGLDZFQUE2RTtBQUM3RSxNQUFNO0FBRU4sa0ZBQWtGO0FBQ2xGLDREQUE0RDtBQUM1RCw0QkFBNEI7QUFDNUIsTUFBTTtBQU9OLHVDQUE0QztBQUM1QywyQ0FBaUQ7QUFFakQsZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ3RDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsT0FBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDZixPQUFPLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDM0Msb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDbEQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBGLE1BQU0sS0FBSyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQTtRQUN0QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBR3BCLG9GQUFvRjtRQUNwRixtREFBbUQ7UUFDbkQsK0hBQStIO1FBQy9ILGlDQUFpQztJQUNyQyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=