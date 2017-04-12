// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');


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

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
  // 'browserName': 'MicrosoftEdge',
  //  'browserName': 'firefox'
 //  'browserName': 'chrome'
    //platformName: 'Android',
    //platformVersion: '7.0',
   // deviceName: 'Android Emulator',

  'chromeOptions': {
    'args': ['show-fps-counter=true']
  },
   'browserName': 'IE',
    elementScrollBehavior: 1,
    nativeEvents: false

  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
 // baseUrl: 'http://localhost:17556/',
  framework: 'jasmine',
 // baseUrl: 'http://127.0.0.1:4321/index_protractor.html',
  //framework: 'cucumber',
 // seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/MicrosoftWebDriver.exe'],
  //
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
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
