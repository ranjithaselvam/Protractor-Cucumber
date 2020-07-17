import { by, element } from "protractor";
import { ElementHelper } from "../helper/commonUtility";
import { PropertiesFileReader } from "../utility/propertyfilereader";
import { FilePath } from "../utility/filepath";
import { expect } from "chai";
var helper = new ElementHelper();
var dashboardloc = new PropertiesFileReader(FilePath.dashboard);


export class DashboardPage {
    //dashboardTab=element(by.xpath("//*[@class='ng-scope md-ink-ripple']"));

    dashboardTitle = element(by.css("div.content-wrapper > h3"));
    refreshIcon = element(by.css('.icon-refresh'));
    logo = element(by.css(".brand-logo"))



    async clickOnDashboardTab() {
        // this.dashboardTab.click();
        helper.locatortype(dashboardloc.propertiesFileData('loc.tab.dashboard')).click();
    }

    async getDashboardText() {
        await this.dashboardTitle.getText().then(function (text) {

            return text;
        })
    }
    async toCheckIconAvailable() {
        await this.refreshIcon.isPresent().then(function (elementPresent) {
            if (elementPresent) {
                console.log("Refresh icon is available on the top right corner of the page")
            }
            else {
                console.log("Icon is not available")
            }
        })
    }

    async toCheckLogo() {
        await this.logo.isDisplayed().then(function (logo) {
            if (logo) {
                console.log("logo is available on the dashboard page")
            }
            else {
                console.log("logo is not available")
            }
        })


    }

}