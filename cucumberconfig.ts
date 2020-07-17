import { Config, browser } from "protractor";
import { DashboardPage } from "./pages/dashboardpage";

export const config: Config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome'
  },
  // multiCapabilities:[
  //   {
  //     "browserName": 'chrome'
  //   },
  //   {
  //   "browserName": 'firefox'
  //   }
  // ],


  baseurl: "http://10.10.10.231:8082/#/app/dashboard",
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();


  },

  specs: ['../features/dashboard.feature'],



  cucumberOpts: {

    require: [

      './stepdefinitions/dashboard.js',
     './support/hooks.js'

    ],
    format: 'json:report/cucumber_report.json',
    // tags:['@homepage','@dashboardPage']
  },




  onComplete: () => {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
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

    reporter.generate(options);




  },

};




