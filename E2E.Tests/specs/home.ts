/// <reference path="../typings/tsd.d.ts" />

import Page = require('../pages/home-page');
import TravelPage = require('../pages/travel-page');
import ServerApi = require('../test-api/server-api');
import MockModule = require('../test-api/mock-module');
import LanguagePage = require('../pages/langauge');


describe('Home screen',() => {
    var page: Page = null;

    beforeEach(() => {
        page = new Page();
    });

    describe('Navigate to connections', () => {
        it('Should navigate to connections screen', () => {

            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');
            page.get();
            page.open();

            page.start.click();
            browser.waitForAngular();

            expect(browser.getLocationAbsUrl()).toMatch('/menu/travel$');
        }, 60000);

        it('Should displays some connections for the route from 47.377754, 8.642584 to 8117 Fällanden, Zilstrasse 1', () => {

            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');
            page.get();
            page.open();

            page.start.click();
            browser.waitForAngular();

            expect(new TravelPage().connections).toBeDefined();
            expect(new TravelPage().connections.count()).toBeGreaterThan(0);
        }, 60000);
    });

    describe('State',() => {
        beforeEach(() => {
            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');
            page.get();
            page.open();
        });

        it('Should displays menu icon after navigation back from Language screen', () => {
            page.sideMenuToggle.click();
            page.sideMenu.language.click();

            var language = new LanguagePage();
            browser.wait(() => language.cancel.isPresent().then(present => present), 3000);
            language.cancel.click();

            expect(page.sideMenuToggle.isDisplayed()).toBeTruthy();
        });
    });
});