// tslint:disable:trailing-comma
// tslint:disable:ordered-imports
// import './polyfills.ts';

// import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test';
// import 'zone.js/dist/jasmine-patch';
// import 'zone.js/dist/async-test';
// import 'zone.js/dist/fake-async-test';



// import 'core-js/client/shim';
// import 'reflect-metadata';
// import 'zone.js/dist/zone';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';

// import 'rxjs/Rx';

import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
// tslint:disable-next-line:prefer-const
declare var __karma__: any;
// tslint:disable-next-line:prefer-const
declare var require: any;

// Prevent Karma from running prematurely.
// tslint:disable-next-line:only-arrow-functions
__karma__.loaded = () => { };

// First, initialize the Angular testing environment.
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
// tslint:disable-next-line:prefer-const
let context = require.context('./', true, /\.spec\.ts/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();
