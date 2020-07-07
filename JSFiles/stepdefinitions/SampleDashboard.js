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
    expect(yield protractor_1.element(protractor_1.by.css("div.content-wrapper > h3")).getText()).to.be.equals("Dashboard");
}));
cucumber_1.Then(/^Verify the refresh icon is available on the top right corner of the page$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css(".icon-refresh")).isPresent();
}));
cucumber_1.Then(/^Verify the atmecs logo and falcon text beside the logo are present on the dashboard page$/, { timeout: 40000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.element(protractor_1.by.css('.img-responsive[src="app/img/logo-atmecs-single.png"]')).isDisplayed().then(function (isVisible) {
        if (isVisible) {
            console.log('falcon logo is present');
        }
    });
    // expect($('[ng-show=saving].icon-spin').isDisplayed()).toBe(true);
    // expect(element(by.className('your-class-name')).isDisplayed()).toBeTruthy();
    // expect(element(by.id('title'))).to.eventually.be.displayed
    // expect(element(by.css('h1'))).to.be.present;
    //  expect(element(by.css('h1'))).to.be.displayed
    // expect(element(by.binding('app/img/logo-atmecs-single.png'))
    // .isDisplayed().then(function (isVisible) {
    //        if(isVisible)     
    //        {
    //          expect(element(by.binding('app/img/logo-atmecs-single.png')).getAttribute('src')) 
    //          .toMatch("app/img/logo-atmecs-single.png");
    //       }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL1NhbXBsZURhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUEyRDtBQUMzRCwyQ0FBb0Q7QUFDcEQsNkJBQThCO0FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUkzQixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sT0FBTyxFQUFFLEVBQUU7SUFDdEYsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRy9DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUMsZ0ZBQWdGLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBR2pILE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVuRyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDRFQUE0RSxFQUFFLEdBQVEsRUFBRTtJQUMzRixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsNEZBQTRGLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzlILG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUztRQUMzRyxJQUFHLFNBQVMsRUFDWjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtTQUN4QztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osb0VBQW9FO0lBQ3BFLCtFQUErRTtJQUMvRSw2REFBNkQ7SUFDN0QsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUdqRCwrREFBK0Q7SUFDL0QsNkNBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsOEZBQThGO0lBQzlGLHVEQUF1RDtJQUN2RCxVQUFVO0FBQ2IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9