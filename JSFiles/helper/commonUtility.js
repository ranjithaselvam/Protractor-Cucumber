"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementHelper = void 0;
const protractor_1 = require("protractor");
class ElementHelper {
    locatortype(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element(protractor_1.by.model(arrayLocator[1]));
                break;
            case "Xpath":
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    // get text of the limit//
    getText(locator) {
        return this.locatortype(locator).getText().then(function (text) {
            return text;
        });
    }
    // send keys and enter !!
    typeAndEnter(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.clear().then(function () {
                    elementObj.sendKeys(protractor_1.protractor.Key.ENTER);
                });
            });
        });
    }
    // click on the element
    clickOnElement(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();
            });
        });
    }
    getTtitle(title) {
        return protractor_1.browser.getTitle().then(function (titleTxt) {
            return titleTxt;
        });
    }
}
exports.ElementHelper = ElementHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9jb21tb25VdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNDLDJDQUE2RztBQUU3RyxNQUFhLGFBQWE7SUFFdkIsV0FBVyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxVQUF5QixDQUFDO1FBQzlCLElBQUksWUFBWSxHQUFhLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFFBQVEsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLGdCQUFnQjtZQUNoQixLQUFLLElBQUk7Z0JBQ0wsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU07WUFDVixLQUFLLGFBQWE7Z0JBQ2QsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixVQUFVLEdBQUcsb0JBQU8sQ0FBQyxl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