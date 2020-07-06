
import { Given, When, Then, After, Before } from 'cucumber'
import { browser, element, by, $ } from 'protractor'
import chai = require('chai');
chai.use(require('chai-smoothie'));
const expect = chai.expect;



Given(/^Open falcon url in the browser "([^"]*)"$/, { timeout: 40000 }, async (siteUrl) => {
    await browser.get(siteUrl);
    await browser.waitForAngularEnabled(true);
    await browser.manage().window().maximize();
    
    
})


Then(/^Verify user landed on to the dashboard page by validating the text dashboard$/, { timeout: 40000 }, async () => {
    
   
     expect(await element(by.css("div.content-wrapper > h3")).getText()).to.be.equals("Dashboard");
        
});


Then(/^Verify the refresh icon is available on the top right corner of the page$/, async() => {
  await	element(by.css(".icon-refresh")).isPresent();
});



Then(/^Verify the atmecs logo and falcon text beside the logo are present on the dashboard page$/, { timeout: 40000 }, async () => {
    element(by.css('.img-responsive[src="app/img/logo-atmecs-single.png"]')).isDisplayed().then(function (isVisible) {
        if(isVisible)
        {
            console.log('falcon logo is present')
        }
     });
    // expect($('[ng-show=saving].icon-spin').isDisplayed()).toBe(true);
    // expect(element(by.className('your-class-name')).isDisplayed()).toBeTruthy();
    // expect(element(by.id('title'))).to.eventually.be.displayed
    // expect(element(by.css('h1'))).to.be.present;
    // expect(element(by.css('h1'))).to.be.displayed


    // expect(element(by.binding('app/img/logo-atmecs-single.png'))
    // .isDisplayed().then(function (isVisible) {
    //        if(isVisible)     
    //        {
    //          expect(element(by.binding('app/img/logo-atmecs-single.png')).getAttribute('src')) 
    //          .toMatch("app/img/logo-atmecs-single.png");
    //       }
 });





