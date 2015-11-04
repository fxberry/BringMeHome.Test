import MenuItem = require('./pie-menu-item');

class PieMenu {
    container: protractor.ElementFinder;
    selected: MenuItem;

    constructor(locator: webdriver.Locator) {
        this.container = element(locator);
        this.selected = new MenuItem(this.container);
    }
}

export = PieMenu