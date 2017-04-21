// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

//onPrepare: function () {
//    var wd = require('wd'),
//      protractor = require('protractor'),
//      wdBridge = require('wd-bridge')(protractor, wd);
//    wdBridge.initFromProtractor(exports.config);
// }


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  // Use this when running Webdriver manually. make sure  webdriver.edge.driver system property is set to the executable.
  // seleniumAddress: 'http://localhost:17556/',
  capabilities: {
    elementScrollBehavior: 1,
    nativeEvents: false,
    // browserName: 'MicrosoftEdge',
    // platform: 'Windows 10',
    // version: '13.10586',

    browserName: 'chrome',

    // browserName: 'firefox',

  },
  // multiCapabilities: [
  //   {
  //     browserName: 'chrome',
  //     chromeOptions: {
  //       'args': ['show-fps-counter=true']
  //     },
  //   },
  //   {
  //     browserName: 'firefox'
  //   },
  //   {
  //     browserName: 'MicrosoftEdge',
  //     platform: 'Windows 10',
  //     version: '13.10586',
  //   }
  // ],

  directConnect: false,
  baseUrl: 'http://localhost:49152/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    browser.ignoreSynchronization = false;
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true,
      savePath: './test/reports/',
    }));
  }
};
