export var chrome = {
    name: 'Chrome',
    browserName: 'chrome',
    chromeOptions: {
        'args': [
            'incognito',
            'disable-extensions',
            'start-maximized',
            'enable-crash-reporter-for-testing'
        ]
    }
};