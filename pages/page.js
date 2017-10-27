"use strict";

export default class WebPage {

    constructor() {
        
        if (new.target === WebPage) {
            throw new TypeError("Cannot construct Abstract WebPage instances directly");
        }

    }

    waitForFullPageAvailable(pageObject, PAGE_ELEMENTS_LOCATORS) {

        if (PAGE_ELEMENTS_LOCATORS === undefined || Object.keys(PAGE_ELEMENTS_LOCATORS).length <= 0) {
            throw new Error(`PAGE_ELEMENTS_LOCATORS object in ${pageObject.constructor.name} page object does not contain any locators.`);
        }

        for(let [name, locator] of Object.entries(PAGE_ELEMENTS_LOCATORS)) {
            //TODO validation for all elements on page
        }

    }

}