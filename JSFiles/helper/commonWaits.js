"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonWait = void 0;
const commonUtility_1 = require("../helper/commonUtility");
const protractor_1 = require("protractor");
var waits = new commonUtility_1.ElementHelper();
class CommonWait {
    waitForElementIsDisplayed(locator) {
        protractor_1.browser.wait(function () {
            var elementObj;
            elementObj = waits.locatortype(locator);
            elementObj.isDisplayed();
        }, 30000);
    }
    waitForElementIsPresent(locator) {
        protractor_1.browser.wait(function () {
            var elementObj;
            elementObj = waits.locatortype(locator);
            elementObj.isPresent();
        }, 30000);
    }
    waitForElementVisiblity(locator) {
        let ec = protractor_1.ExpectedConditions;
        var elementObj;
        elementObj = waits.locatortype(locator);
        var condition = ec.visibilityOf(elementObj);
        protractor_1.browser.wait(condition, 30000);
    }
}
exports.CommonWait = CommonWait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uV2FpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9oZWxwZXIvY29tbW9uV2FpdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQXdEO0FBQ3hELDJDQUF3RTtBQUN4RSxJQUFJLEtBQUssR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQTtBQUUvQixNQUFhLFVBQVU7SUFFbkIseUJBQXlCLENBQUMsT0FBZTtRQUVyQyxvQkFBTyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksVUFBeUIsQ0FBQztZQUM5QixVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBRWIsQ0FBQztJQUNELHVCQUF1QixDQUFDLE9BQWU7UUFFbkMsb0JBQU8sQ0FBQyxJQUFJLENBQUM7WUFDVCxJQUFJLFVBQXlCLENBQUM7WUFDOUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUViLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxPQUFlO1FBQ25DLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO1FBQzVCLElBQUksVUFBeUIsQ0FBQztRQUM5QixVQUFVLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLG9CQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUdsQyxDQUFDO0NBTUo7QUFuQ0QsZ0NBbUNDIn0=