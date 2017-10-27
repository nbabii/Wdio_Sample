"use strict";
import WebPage from "./page";

const PAGE_ELEMENTS_LOCATORS = {
    btnLogin: ".site-header__top a[href='/login']",
    searchInput: "#site-header-search-field",
    productBasketButton: ".minibasket-button__value-info",
    priceLocator: ".minibasket-button__basket-value"
}; 

export default class MainPage extends WebPage {

    constructor() {        
        super();
        super.waitForFullPageAvailable(this, PAGE_ELEMENTS_LOCATORS)
    }

    static open() {
        
        console.log("Opening Main Page...");
        browser.url("/");
        console.log("Main Page opened");        
        return new MainPage();

    }

}