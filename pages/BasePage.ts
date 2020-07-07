

import { browser, protractor,by,element} from "protractor"

export class BasePage{
locator=require('../locators/HomePageLoc.ts')

   dashboard = element(by.css(this.locator.loc_dashboard));
   recentRun= element(by.css(this.locator.loc_recentrun));
   view= element(by.css(this.locator.loc_view));
   productSnapshot= element(by.css(this.locator.loc_productsnapshot));

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