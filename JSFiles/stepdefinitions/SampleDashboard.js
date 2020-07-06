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
const chai = require("chai");
chai.use(require('chai-smoothie'));
const expect = chai.expect;
cucumber_1.Given(/^Open falcon url in the browser "([^"]*)"$/, { timeout: 40000 }, (siteUrl) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(siteUrl);
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.Then(/^Verify user landed on to the dashboard page by validating the text dashboard$/, { timeout: 40000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    var dashboardPage = yield protractor_1.element(protractor_1.by.css("div.content-wrapper > h3")).getText();
    if (expect(dashboardPage).to.be.equals("Dashboard")) {
        console.log("User landed successfully");
    }
    else {
        console.log("User cann't able to navigate");
    }
}));
cucumber_1.Then(/^Verify the refresh icon is available on the top right corner of the page$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css(".icon-refresh")).isPresent();
}));
cucumber_1.Then(/^Verify the atmecs logo an falcon text beside the logo are present on the dashboard page$/, { timeout: 40000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.element(protractor_1.by.css('.img-responsive[src="app/img/logo-atmecs-single.png"]')).isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log("Logo is visible");
        }
        else {
            console.log("logo is not visible");
        }
    });
    // expect($('[ng-show=saving].icon-spin').isDisplayed()).toBe(true);
    // expect(element(by.className('your-class-name')).isDisplayed()).toBeTruthy();
    // expect(element(by.id('title'))).to.eventually.be.displayed
    // expect(element(by.css('h1'))).to.be.present;
    // expect(element(by.css('h1'))).to.be.displayed
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL1NhbXBsZURhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUEyRDtBQUMzRCwyQ0FBb0Q7QUFDcEQsNkJBQThCO0FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUkzQixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sT0FBTyxFQUFFLEVBQUU7SUFDdEYsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUMsZ0ZBQWdGLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQ2xILElBQUksYUFBYSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoRixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7S0FDMUM7U0FDRztRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtLQUM5QztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNEVBQTRFLEVBQUUsR0FBUSxFQUFFO0lBQzNGLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywyRkFBMkYsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDN0gsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxTQUFTO1FBQzNHLElBQUksU0FBUyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBQ2pDO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDckM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILG9FQUFvRTtJQUNwRSwrRUFBK0U7SUFDL0UsNkRBQTZEO0lBQzdELCtDQUErQztJQUMvQyxnREFBZ0Q7QUFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9