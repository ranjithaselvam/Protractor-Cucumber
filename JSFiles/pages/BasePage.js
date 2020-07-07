"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this.locator = require('../locators/HomePageLoc.ts');
        this.dashboard = protractor_1.element(protractor_1.by.css(this.locator.loc_dashboard));
        this.recentRun = protractor_1.element(protractor_1.by.css(this.locator.loc_recentrun));
        this.view = protractor_1.element(protractor_1.by.css(this.locator.loc_view));
        this.productSnapshot = protractor_1.element(protractor_1.by.css(this.locator.loc_productsnapshot));
    }
    clickOnDashboardTab() {
        this.dashboard.click();
    }
    clickOnRecentRunTab() {
        this.recentRun.click();
    }
    clickOnViewTab() {
        this.view.click();
    }
    clickOnProductSnapshot() {
        this.productSnapshot.click();
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyQ0FBMEQ7QUFFMUQsTUFBYSxRQUFRO0lBQXJCO1FBQ0EsWUFBTyxHQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1FBRTFDLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3hELGNBQVMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELFNBQUksR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLG9CQUFlLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBb0J0RSxDQUFDO0lBbEJHLG1CQUFtQjtRQUVmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUNELG1CQUFtQjtRQUVmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGNBQWM7UUFFVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxzQkFBc0I7UUFFbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBRUo7QUExQkQsNEJBMEJDIn0=