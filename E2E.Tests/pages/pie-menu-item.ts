class PieMenuItem {
    button: protractor.ElementFinder;
    label: protractor.ElementFinder;
    constructor(private container: protractor.ElementFinder) {
        this.button = container.element(by.css('[pie-menu] > .button-pie > .button-container button'));
        this.label = container.element(by.css('[pie-menu] > .button-pie > .button-container .button-title'));
    }
}

export = PieMenuItem