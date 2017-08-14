import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'path-location',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  template: `
    <h1>PathLocationStrategy</h1>
    Current URL is: <code>{{ location.path() }}</code><br>
    Normalize: <code>path</code> is: <code>{{ location.normalize(location.path()) }}</code><br>
  `
})
export class PathLocationComponent {
  location: Location;
  constructor(location: Location) { this.location = location; }
}
