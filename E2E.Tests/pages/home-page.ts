/// <reference path="../typings/tsd.d.ts" />
import HomeMenu = require('./home-left-side-menu');
import Menu = require('./pie-menu');

class Page {
    start: protractor.ElementFinder = element(by.id('start-button'));
    sideMenuToggle: protractor.ElementFinder = element(by.css('[nav-bar="active"] button[menu-toggle="left"]'));
    backButton: protractor.ElementFinder = element(by.css('[nav-bar="active"] .back-button'));
    sideMenu: HomeMenu = new HomeMenu(by.tagName('ion-side-menu'));
    pieMenu:Menu = new Menu(by.css('[pie-menu]'));

    get = () => {
        browser.get('/BringMeHome/');
    };

    open = () => {
        return browser.setLocation('menu/home');
    };
}

export = Page;