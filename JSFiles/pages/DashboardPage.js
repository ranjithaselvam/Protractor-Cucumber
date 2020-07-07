"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenDashboardPage = void 0;
const protractor_1 = require("protractor");
class OpenDashboardPage {
    constructor() {
        this.test = protractor_1.element(protractor_1.by.xpath("//h4[.='REST API TEST RESULT']"));
        this.customer = protractor_1.element(protractor_1.by.xpath("//select[@name='customers']"));
        this.modules = protractor_1.element(protractor_1.by.xpath("//select[@name='modules']"));
        this.status = protractor_1.element(protractor_1.by.css("[name='status']"));
    }
    selectTest() {
        this.test.click();
    }
    selectCustomer() {
        this.customer.$('[value="falcon"]').click();
    }
    selectmodules() {
        this.modules.$('[value="createFalconPosts"]').click;
    }
    selectStatus() {
        this.status.$('[value="PASS"]').click();
    }
}
exports.OpenDashboardPage = OpenDashboardPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0Rhc2hib2FyZFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkNBQTBEO0FBQzFELE1BQWEsaUJBQWlCO0lBQTlCO1FBSUcsU0FBSSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFFMUQsWUFBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFFdkQsV0FBTSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUF1QjlDLENBQUM7SUFwQkUsVUFBVTtRQUVSLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGNBQWM7UUFFVixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxhQUFhO1FBRVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDdkQsQ0FBQztJQUdBLFlBQVk7UUFFVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQWpDRCw4Q0FpQ0MifQ==