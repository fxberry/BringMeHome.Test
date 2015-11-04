var config = require('./config');
var browsers = require('./browsers.config');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: browsers.chrome,

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        home: 'specs/home.js'
    },
    specs: ['specs/**/*.js'],

    baseUrl: config().baseUrl,

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 60 * 1000
    },
    allScriptsTimeout: 60 * 1000
};