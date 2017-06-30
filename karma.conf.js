// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-edge-launcher'),
      require('karma-firefox-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-jasmine-diff-reporter'),
      require('karma-jasmine-html-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    jasmineDiffReporter: {
      pretty: true,
      multiline: {
        before: 1,    // 3 newlines 
        after: '\n',  // 1 newline 
        indent: '  '  // 2 spaces 
      },
      verbose: true,
      color: {
        expectedBg: 'red',
        expectedWhitespaceBg: 'red',
        actualBg: 'green',
        actualWhitespaceBg: 'green'
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['jasmine-diff', 'progress', 'kjhtml', 'coverage-istanbul']
      : ['jasmine-diff', 'progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Edge'],
    singleRun: false
  });
};
