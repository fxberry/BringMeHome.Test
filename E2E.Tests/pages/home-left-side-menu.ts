class LeftHomeMenu {
    container: protractor.ElementFinder;
    home: protractor.ElementFinder;
    work: protractor.ElementFinder;
    love: protractor.ElementFinder;
    language: protractor.ElementFinder;

    constructor(locator: webdriver.Locator) {
        this.container = element(locator);
        this.home = this.container.element(by.css('[ui-sref="menu.location({type: \'home\'})"]'));
        this.work = this.container.element(by.css('[ui-sref="menu.location({type: \'work\'})"]'));
        this.love = this.container.element(by.css('[ui-sref="menu.location({type: \'love\'})"]'));
        this.language = this.container.element(by.css('[ui-sref="menu.language"]'));
    }
}

export = LeftHomeMenu;