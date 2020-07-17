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
const dashboardpage_1 = require("../pages/dashboardpage");
const chai_1 = require("chai");
const protractor_1 = require("protractor");
var homePage = new dashboardpage_1.DashboardPage();
/*scenario 1*/
cucumber_1.Then(/^Verify the user landed on to the dashboard "([^"]*)"$/, { timeout: 20000 }, (expecteddata) => __awaiter(void 0, void 0, void 0, function* () {
    // homePage.clickOnDashboardTab();
    yield protractor_1.browser.manage().timeouts().implicitlyWait(15000);
    var dashboard = yield homePage.getDashboardText();
    console.log("from data table:" + expecteddata);
    console.log("from website :" + dashboard);
    // expect(dashboard).to.contains(expecteddata)
}));
cucumber_1.Then(/^Verify the refersh icon is available on the tab right corner of the page$/, { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckIconAvailable();
}));
cucumber_1.Then(/^Verify atmecs logo on the dashboard page$/, { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.toCheckLogo();
}));
// /*scenario 2*/
cucumber_1.Then(/^Verify whether all the project available on the dashboard page$/, { timeout: 40000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element.all(protractor_1.by.xpath("//*[@class='media-box-heading ng-binding']")).getText().then(function (actualData) {
        console.log("list of project :" + actualData);
    });
}));
cucumber_1.When(/^Click REST API TEST RESULT Link in dashboard$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    });
});
cucumber_1.When(/^Select status as pass$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='status']")).$("[value='PASS']").click();
    });
});
cucumber_1.Then(/^Able to get pass test cases$/, { timeout: 70000 }, function (table) {
    return __awaiter(this, void 0, void 0, function* () {
        var status = yield protractor_1.element(protractor_1.by.css("#view-report-filter > div.slimScrollDiv > scrollable > table")).getText();
        console.log(status);
        var detail = table.raw();
        detail.forEach(function (value) {
            console.log("expec :" + value);
            //  expect(status).to.be.equals(value)
        });
        //expect(status).to.be.equals(detail.Test Case Name );
    });
});
cucumber_1.When(/^User click on toggle button$/, { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("label.pull-right > span")).click();
        protractor_1.browser.sleep(10000);
    });
});
cucumber_1.Then(/^User can able to view test status$/, { timeout: 100000 }, function (table) {
    return __awaiter(this, void 0, void 0, function* () {
        var actualtest = yield protractor_1.element(protractor_1.by.xpath("//h4[.='10 TEST(S)']")).getText();
        var actualpass = yield protractor_1.element(protractor_1.by.xpath("//h4[.='9']")).getText();
        var actualfail = yield protractor_1.element(protractor_1.by.xpath("//h4[.='1']")).getText();
        var actualskip = yield protractor_1.element(protractor_1.by.xpath("//h4[.='0']")).getText();
        var expected = table.rowsHash();
        chai_1.expect(actualtest).to.be.equals(expected.testrun);
        chai_1.expect(actualpass).to.be.equals(expected.pass);
        chai_1.expect(actualfail).to.be.equals(expected.fail);
        chai_1.expect(actualskip).to.be.equals(expected.skip);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb25zL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1RDtBQUN2RCwwREFBdUQ7QUFDdkQsK0JBQThCO0FBQzlCLDJDQUFrRDtBQUNsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUNuQyxjQUFjO0FBQ2QsZUFBSSxDQUFDLHdEQUF3RCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sWUFBWSxFQUFFLEVBQUU7SUFDdEcsa0NBQWtDO0lBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsOENBQThDO0FBRWxELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEVBQTRFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzlHLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0Q0FBNEMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFVLEVBQUU7SUFDbEYsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGlCQUFpQjtBQUNqQixlQUFJLENBQUMsa0VBQWtFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBRXBHLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsVUFBVTtRQUV2RyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFDO0FBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnREFBZ0QsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFHdkUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXhGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMseUJBQXlCLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBRS9DLE1BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLCtCQUErQixFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQWdCLEtBQXFCOztRQUUxRixJQUFJLE1BQU0sR0FBRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUs7WUFHekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0Isc0NBQXNDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBR1Asc0RBQXNEO0lBQzFELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1FBQ3RELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBTUgsZUFBSSxDQUFDLHFDQUFxQyxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQWdCLEtBQXFCOztRQUdwRyxJQUFJLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHekUsSUFBSSxVQUFVLEdBQUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVoRSxJQUFJLFVBQVUsR0FBQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhFLElBQUksVUFBVSxHQUFDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFJOUQsSUFBSSxRQUFRLEdBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRWhDLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakQsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9