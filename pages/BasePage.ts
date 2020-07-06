

import { browser, protractor,by,element} from "protractor"
export class BasePage{
   dashboard = element(by.css("a[ng-href='#/app/dashboard'] > span"));
   recentRun= element(by.css("a[ng-href='#/recentruns/view'] > span"));
   view= element(by.css("a[ng-href='#/reports/'] > span"));
   productSnapshot= element(by.css("a[ng-href='#/product/view/'] > span"));

    clickOnDashboardTab()
    {
        this.dashboard.click();

    }
    clickOnRecentRunTab()
    {
        this.recentRun.click();
    }
    clickOnViewTab()
    {
        this.view.click();
    }
    clickOnProductSnapshot()
    {
       this.productSnapshot.click();
    }
    
}