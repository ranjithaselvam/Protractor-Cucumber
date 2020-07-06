import { BeforeAll, After, AfterAll } from "cucumber";
import { browser } from "protractor";
const {Status} = require("cucumber");
let launch = require("../testdata/launch.ts")

BeforeAll(async()=>
{
    await browser.get(launch.site)
})

After(async(scenario:any) =>
    {
        if(scenario.result.status = Status.failed)
        {
           const screenshot = await browser.takeScreenshot();
           Buffer.alloc(screenshot.length,screenshot,"base64")
           scenario.attach(Image,'image/img');
        }
    })

    AfterAll({timeout : 100*1000},async()=>
    {
        browser.close();
    })