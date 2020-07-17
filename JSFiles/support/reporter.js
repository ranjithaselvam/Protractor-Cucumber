"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";
const cucumberReporterOptions = {
    // jsonFile: targetJson,
    // output: htmlReports + "/cucumber_reporter.html",
    theme: "bootstrap",
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    scenarioTimestamp: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  83.0.4103.116",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdXBwb3J0L3JlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBbUQ7QUFDbkQsdUNBQXlCO0FBQ3pCLCtDQUFpQztBQUNqQywyQ0FBNkI7QUFDN0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUQsTUFBTSxVQUFVLEdBQUcsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0FBRXpELE1BQU0sdUJBQXVCLEdBQU87SUFDaEMsd0JBQXdCO0lBQ3hCLG1EQUFtRDtJQUVuRCxLQUFLLEVBQUUsV0FBVztJQUNsQixRQUFRLEVBQUUsNkJBQTZCO0lBQ3ZDLE1BQU0sRUFBRSw2QkFBNkI7SUFDckMsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFFBQVEsRUFBRTtRQUNOLGFBQWEsRUFBRSxPQUFPO1FBQ3RCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixVQUFVLEVBQUUsV0FBVztRQUN2QixVQUFVLEVBQUUsUUFBUTtLQUN2QjtDQUNKLENBQUM7QUFFRixNQUFhLFFBQVE7SUFFVixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCO1FBQzFCLElBQUk7WUFDQSxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7U0FDL0U7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLElBQUksR0FBRyxFQUFFO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQzthQUN6RTtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBakJELDRCQWlCQyJ9