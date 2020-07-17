"use strict";
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
const commonUtility_1 = require("../helper/commonUtility");
var _ = require('lodash');
let helper = new commonUtility_1.ElementHelper();
cucumber_1.Given(/^User launch the chrome browser$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Step 1: Browser opening");
        protractor_1.browser.waitForAngularEnabled(true);
        yield protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.When(/^User opens URL "([^"]*)"$/, { timeout: 70000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
        yield protractor_1.browser.getCurrentUrl().then(function (actualurl) {
            chai_1.expect(url).to.be.equals(actualurl);
        });
    });
});
cucumber_1.When(/^select view tab in main naviagtion$/, { timeout: 250000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    var exe = protractor_1.element(protractor_1.by.css("a[ng-href='#/reports/'] > span"));
    protractor_1.browser.actions().mouseMove(exe).click().perform();
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
}));
cucumber_1.When(/^filter the status as pass in select status$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    //    var exe=  element(by.cssContainingText('option', 'Pass'));
    //    browser.actions().mouseMove(exe).click().perform();
    yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    // viewPage.filterStatusAsPass();
}));
cucumber_1.Then(/^able to get pass test cases$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (passStatus) {
        console.log("total pass :" + passStatus);
    });
    //  viewPage.getAllPassStatus();
    var exepass = table.hashes();
    _.each(exepass, function (passrow) {
        console.log("expected data:" + passrow.Status);
    });
}));
cucumber_1.When(/^filter the status as fail in select status$/, { timeout: 70000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.manage().timeouts().implicitlyWait(15000);
    yield protractor_1.element(protractor_1.by.cssContainingText('option', 'Fail')).click();
}));
cucumber_1.Then(/^able to get fail test case$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (failStatus) {
        console.log("total fail :" + failStatus);
    });
    var exefail = table.rows();
    exefail.forEach(function (value) {
        console.log("Total fail :" + value[2]);
    });
}));
cucumber_1.Then(/^filter the status as skip in the select status$/, { timeout: 50000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.cssContainingText('option', 'Skip')).click();
}));
cucumber_1.Then(/^able to get skip test case$/, { timeout: 70000 }, (table) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css('table.ng-table-rowselected.ng-scope.ng-table')).getText().then(function (skipStatus) {
        console.log("total skip :" + skipStatus);
    });
    var exeSkip = table.rows();
    exeSkip.forEach(function (values) {
        console.log("Total fail :" + values[0]);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQThEO0FBQzlELDJDQUFrRDtBQUNsRCwrQkFBOEI7QUFDOUIsMkRBQXdEO0FBT3hELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQU1qQyxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdEMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFnQixHQUFHOztRQUN0RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTO1lBQ2xELGFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBRTFFLElBQUksR0FBRyxHQUFFLG9CQUFPLENBQUMsZUFB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