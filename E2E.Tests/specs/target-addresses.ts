/// <reference path="../typings/tsd.d.ts" />

import HomePage = require('../pages/home-page');
import Page = require('../pages/target-addresses');
import ServerApi = require('../test-api/server-api');
import MockModule = require('../test-api/mock-module');


describe('Target address (home)',() => {
    var homePage: HomePage = null;
    var page: Page = null;

    beforeEach(() => {
        homePage = new HomePage();
        page = new Page();
    });

    fit('-> initial value set',() => {
        var expected = '8304 Wallisellen, Industriestrasse 17';

        homePage.get();

        page.input.clear();
        page.input.sendKeys(expected);

        expect(page.suggestions.count()).toBeGreaterThan(0);

        page.suggestions.first().click();
        page.save.click();

        expect(homePage.pieMenu.selected.label.getText()).toBe(expected);
    });

    xdescribe('-> navigates to setup screens',() => {
        it('-> Should navigate to the home setup screen when no addresses have been setted up',() => {
            homePage.get();

            expect(browser.getLocationAbsUrl()).toMatch('/menu/location/home$');
        });

        it('-> navigates to home',() => {
            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');

            homePage.get();
            homePage.open();

            homePage.sideMenuToggle.click();
            homePage.sideMenu.home.click();
            expect(browser.getLocationAbsUrl()).toMatch('/menu/location/home$');
        });


        it('-> navigates to work',() => {
            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');

            homePage.get();
            homePage.open();

            homePage.sideMenuToggle.click();
            homePage.sideMenu.work.click();
            expect(browser.getLocationAbsUrl()).toMatch('/menu/location/work$');
        });

        it('-> navigates to love',() => {
            new MockModule().mockGeoLocation(47.377754, 8.642584, '8117 Fällanden, Zilstrasse 1');

            homePage.get();
            homePage.open();

            homePage.sideMenuToggle.click();
            homePage.sideMenu.love.click();
            expect(browser.getLocationAbsUrl()).toMatch('/menu/location/love$');
        });

    });
});