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
const dashboardloc = __importStar(require("C:/Users/ranjitha.selvam/Desktop/Atmecs/Locators/dashboardloc.json"));
const recentrunloc = __importStar(require("C:/Users/ranjitha.selvam/Desktop/Atmecs/Locators/recentrunloc.json"));
const commonUtility_1 = require("../helper/commonUtility");
var _ = require('lodash');
var helpers = new commonUtility_1.ElementHelper();
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
cucumber_1.Then(/^User can able to view test status$/, { timeout: 100000 }, function (table) {
    return __awaiter(this, void 0, void 0, function* () {
        var actualtest = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.totaltest)).getText();
        var actualpass = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.passtest)).getText();
        var actualfail = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.failtest)).getText();
        var actualskip = yield protractor_1.element(protractor_1.by.xpath(dashboardloc.skiptest)).getText();
        var expected = table.rowsHash();
        chai_1.expect(actualtest).to.be.equals(expected.testrun);
        chai_1.expect(actualpass).to.be.equals(expected.pass);
        chai_1.expect(actualfail).to.be.equals(expected.fail);
        chai_1.expect(actualskip).to.be.equals(expected.skip);
    });
});
/*SCENARIO :2 */
cucumber_1.When(/^Click on recent run$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css(recentrunloc.recentrun)).click();
    });
});
cucumber_1.When(/^Select product$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath(recentrunloc.product)).click();
    });
});
cucumber_1.When(/^Select test case$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath(recentrunloc.testcase)).click();
    });
});
cucumber_1.Then(/^User can view the tesct case details$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css(recentrunloc.testdetails)).getText();
        console.log("Status :" + status);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx1Q0FBNEU7QUFDNUUsMkNBQW9EO0FBQ3BELCtCQUEyQjtBQUUzQixpSEFBeUc7QUFDekcsaUhBQWtHO0FBQ2xHLDJEQUF3RDtBQUV4RCxJQUFJLENBQUMsR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUE7QUFLakMsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ25DLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLEdBQUc7O1FBQ3JFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO1lBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hFLGFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUFBLENBQUMsQ0FBQyxDQUFDO0lBRTFDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsa0NBQWtD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