class TargetAddresses {

    input: protractor.ElementFinder = element(by.model('Model.Address'));
    save: protractor.ElementFinder = element(by.css('[ng-click="Save()"]'));
    cancel: protractor.ElementFinder = element(by.model('[ng-click="Cancel()"]'));
    currentValue: protractor.ElementFinder = element(by.tagName('h4'));
    suggestions: protractor.ElementArrayFinder = element.all(by.css('.address-suggestions ion-item'));

    constructor() {
        
    }

    toHome() {
        return this.toScreen('home');
    }

    toWork() {
        return this.toScreen('work');
    }

    toLove() {
        return this.toScreen('love');
    }

    private toScreen(type: string) {
        return browser.setLocation('/menu/location/' + type);
    }
}

export = TargetAddresses