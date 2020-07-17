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
exports.DashboardPage = void 0;
const protractor_1 = require("protractor");
const commonUtility_1 = require("../helper/commonUtility");
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
var helper = new commonUtility_1.ElementHelper();
var dashboardloc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.dashboard);
class DashboardPage {
    constructor() {
        //dashboardTab=element(by.xpath("//*[@class='ng-scope md-ink-ripple']"));
        this.dashboardTitle = protractor_1.element(protractor_1.by.css("div.content-wrapper > h3"));
        this.refreshIcon = protractor_1.element(protractor_1.by.css('.icon-refresh'));
        this.logo = protractor_1.element(protractor_1.by.css(".brand-logo"));
    }
    clickOnDashboardTab() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.dashboardTab.click();
            helper.locatortype(dashboardloc.propertiesFileData('loc.tab.dashboard')).click();
        });
    }
    getDashboardText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dashboardTitle.getText().then(function (text) {
                return text;
            });
        });
    }
    toCheckIconAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshIcon.isPresent().then(function (elementPresent) {
                if (elementPresent) {
                    console.log("Refresh icon is available on the top right corner of the page");
                }
                else {
                    console.log("Icon is not available");
                }
            });
        });
    }
    toCheckLogo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logo.isDisplayed().then(function (logo) {
                if (logo) {
                    console.log("logo is available on the dashboard page");
                }
                else {
                    console.log("logo is not available");
                }
            });
        });
    }
}
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2Rhc2hib2FyZHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLDJEQUF3RDtBQUN4RCxzRUFBcUU7QUFDckUsa0RBQStDO0FBRS9DLElBQUksTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2pDLElBQUksWUFBWSxHQUFHLElBQUkseUNBQW9CLENBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUdoRSxNQUFhLGFBQWE7SUFBMUI7UUFDSSx5RUFBeUU7UUFFekUsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzdELGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBdUN6QyxDQUFDO0lBbkNTLG1CQUFtQjs7WUFDckIsNkJBQTZCO1lBQzdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRixDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBQ2xCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUVuRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUNLLG9CQUFvQjs7WUFDdEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLGNBQWM7Z0JBQzVELElBQUksY0FBYyxFQUFFO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLCtEQUErRCxDQUFDLENBQUE7aUJBQy9FO3FCQUNJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtpQkFDdkM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQzdDLElBQUksSUFBSSxFQUFFO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQTtpQkFDekQ7cUJBQ0k7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2lCQUN2QztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBR04sQ0FBQztLQUFBO0NBRUo7QUE1Q0Qsc0NBNENDIn0=