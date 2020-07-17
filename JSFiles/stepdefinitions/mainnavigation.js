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
const propertyfilereader_1 = require("../utility/propertyfilereader");
const filepath_1 = require("../utility/filepath");
const commonUtility_1 = require("../helper/commonUtility");
//var expect = chai.expect;
let helper = new commonUtility_1.ElementHelper();
let mainNavigationLoc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.mainNavigation);
let dashboardLoc = new propertyfilereader_1.PropertiesFileReader(filepath_1.FilePath.dashboard);
/**Scenario 1 */
// When(/^Open the website "([^"]*)"$/, { timeout: 20000 }, async (url) => {
//    await browser.manage().window().maximize();
//    await browser.get(url);
// });
cucumber_1.When(/^Click all the tab in main navigation$/, { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield helper.allElement(mainNavigationLoc.propertiesFileData('loc.tab.navigations')).each(function (label) {
        label.click();
        console.log("sucessfully");
    });
}));
// Then(/^verify all the tab page navigation$/, { timeout: 50000 }, async (table: TableDefinition) => {
//    var expectedUrl = table.rowsHash();
//    // expect(browser.getCurrentUrl()).to.contains(expectedUrl.productsnapshot)
//    await browser.navigate().back();
//    await browser.getCurrentUrl().then(getUrl => {
//       expect(getUrl).to.contains(expectedUrl.view)
//    });
//    await browser.navigate().back();
//    await browser.getCurrentUrl().then(getUrl => {
//       expect(getUrl).to.contains(expectedUrl.recentrun)
//    });
//    await browser.navigate().back();
//    await browser.getCurrentUrl().then(getUrl => {
//       expect(getUrl).to.contains(expectedUrl.dashboard)
//    });
// });
// /**Scenario 2 */
cucumber_1.Then(/^verify whether all the project available on the dashboard page$/, { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    //  var expectedItem = table.rowsHash();
    yield helper.allElement(dashboardLoc.propertiesFileData('loc.txt.listOfItem')).getText().then(function (allItem) {
        console.log("list of item :" + allItem.length);
        //  console.log("splitte :" + expectedItem.listOfProject.split(" "));
        // console.log("expected :" + expectedItem.listOfProject.length)
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbm5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvbWFpbm5hdmlnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0U7QUFFdEUsc0VBQXFFO0FBQ3JFLGtEQUErQztBQUMvQywyREFBd0Q7QUFHeEQsMkJBQTJCO0FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBQ2pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSx5Q0FBb0IsQ0FBQyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFFLElBQUksWUFBWSxHQUFHLElBQUkseUNBQW9CLENBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUkvRCxnQkFBZ0I7QUFDaEIsNEVBQTRFO0FBQzVFLGlEQUFpRDtBQUNqRCw2QkFBNkI7QUFDN0IsTUFBTTtBQUVOLGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFHM0UsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFVO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXhCLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVBLHVHQUF1RztBQUN2Ryx5Q0FBeUM7QUFDekMsaUZBQWlGO0FBQ2pGLHNDQUFzQztBQUN0QyxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEMsb0RBQW9EO0FBQ3BELDBEQUEwRDtBQUMxRCxTQUFTO0FBQ1Qsc0NBQXNDO0FBRXRDLG9EQUFvRDtBQUNwRCwwREFBMEQ7QUFDMUQsU0FBUztBQUNULE1BQU07QUFHTixtQkFBbUI7QUFDbkIsZUFBSSxDQUFDLGtFQUFrRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUN2Ryx3Q0FBd0M7SUFFdEMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztRQUM1RyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxxRUFBcUU7UUFDcEUsZ0VBQWdFO0lBRWxFLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9