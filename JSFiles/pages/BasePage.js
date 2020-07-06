"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
class BasePage {
    constructor() {
        this.dashboard = protractor_1.element(protractor_1.by.css("a[ng-href='#/app/dashboard'] > span"));
        this.recentRun = protractor_1.element(protractor_1.by.css("a[ng-href='#/recentruns/view'] > span"));
        this.view = protractor_1.element(protractor_1.by.css("a[ng-href='#/reports/'] > span"));
        this.productSnapshot = protractor_1.element(protractor_1.by.css("a[ng-href='#/product/view/'] > span"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyQ0FBMEQ7QUFDMUQsTUFBYSxRQUFRO0lBQXJCO1FBQ0csY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsY0FBUyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsU0FBSSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDeEQsb0JBQWUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO0lBb0IzRSxDQUFDO0lBbEJHLG1CQUFtQjtRQUVmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUNELG1CQUFtQjtRQUVmLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGNBQWM7UUFFVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxzQkFBc0I7UUFFbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBRUo7QUF4QkQsNEJBd0JDIn0=