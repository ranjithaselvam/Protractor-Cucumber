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
const { Status } = require("cucumber");
let launch = require("../testdata/launch.ts");
cucumber_1.BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(launch.site);
}));
cucumber_1.After((scenario) => __awaiter(void 0, void 0, void 0, function* () {
    if (scenario.result.status = Status.failed) {
        const screenshot = yield protractor_1.browser.takeScreenshot();
        Buffer.alloc(screenshot.length, screenshot, "base64");
        scenario.attach(Image, 'image/img');
    }
}));
cucumber_1.AfterAll({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.close();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFzRDtBQUN0RCwyQ0FBcUM7QUFDckMsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtBQUU3QyxvQkFBUyxDQUFDLEdBQU8sRUFBRTtJQUVmLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLENBQU0sUUFBWSxFQUFFLEVBQUU7SUFFcEIsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUN6QztRQUNHLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25ELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3JDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLG1CQUFRLENBQUMsRUFBQyxPQUFPLEVBQUcsR0FBRyxHQUFDLElBQUksRUFBQyxFQUFDLEdBQU8sRUFBRTtJQUVuQyxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==