import { ElementFinder, element, by, browser, ExpectedConditions, WebElement, protractor, ElementArrayFinder } from "protractor";
export class ElementHelper {



    //Element Loctors
    locatortype(locator: string) {
        var elementObj: ElementFinder;
        var arrayLocator: string[] = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = element(by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = element(by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = element(by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = element(by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = element(by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = element(by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = element(by.model(arrayLocator[1]))
                break;
            case "BIND":
                elementObj = element(by.exactBinding(arrayLocator[1]))
                break;
            case "ButtonText":
                elementObj = element(by.buttonText(arrayLocator[1]))
                break;
            case "Repeater":
                elementObj = element(by.repeater(arrayLocator[1]))
                break;
            case "Option":
                elementObj = element(by.options(arrayLocator[1]))
                break;
               
            default:
                elementObj = element(by.xpath(arrayLocator[1]))
        }
        return elementObj;
    }

    //Selecting all element
    allElement(locator: string) {
        var elementObj: ElementArrayFinder;
        var arrayLocator: string[] = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = element.all(by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = element.all(by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = element.all(by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = element.all(by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = element.all(by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = element.all(by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = element.all(by.model(arrayLocator[1]))
                break;
            case "BIND":
                elementObj = element.all(by.exactBinding(arrayLocator[1]))
                break;
            case "ButtonText":
                elementObj = element.all(by.buttonText(arrayLocator[1]))
                break;
            case "Repeater":
                elementObj = element.all(by.repeater(arrayLocator[1]))
                break;
            case "Option":
                elementObj = element.all(by.options(arrayLocator[1]))
                break;
               
            default:
                elementObj = element.all(by.xpath(arrayLocator[1]))
        }
        return elementObj;
    }




    // // click on the element
    // clickOnElement(locator: string) {
    //     var elementObj: ElementFinder;
    //     elementObj = this.locatortype(locator)
    //     elementObj.isDisplayed().then(function () {
    //         elementObj.isEnabled().then(function () {
    //             elementObj.click();

    //         })
    //     })
    // }




   async clickOnElement(locator:any)
   {
       await this.locatortype(locator).click();
       return this;
   }


    // get text of the limit//
    getElementText(locator: string) {
        return this.locatortype(locator).getText//().then(function(txt:string)
       
    //    {
    //        return txt;
    //    } ) ;
    }

    


    getpageTitle() {


        return browser.getTitle().then(function (titleTxt: string) {
            return titleTxt


        })
    }
// scrow down
scrollToDown(dowPosition: number) {
    browser.executeScript(`window.scrollTo(0,${dowPosition})`);
}


scrollIntoView(locator: string)
{
    var scroll= this.locatortype(locator);
    browser.controlFlow().execute(function() {
        browser.executeScript('arguments[0].scrollIntoView(true)', scroll.getWebElement());

});
}






async getTextData(locator: string){
    //   var textData: string;
    return this.locatortype(locator).getText().then(function (text: string) {
        console.log(text)
        // log4jsConfig.log().debug("Element's text is: " + text);
        return text;
    })

}

clickElement(locator: string) {
    this.locatortype(locator).click();

    //log4jsConfig.log().debug('clicked on element', locator);
}



}
