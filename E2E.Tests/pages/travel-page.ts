/// <reference path="../typings/tsd.d.ts" />

class Page {
    connections: protractor.ElementArrayFinder = element.all(by.className('item-travel'));
}

export = Page;