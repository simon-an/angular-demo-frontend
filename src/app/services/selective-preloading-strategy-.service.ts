import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preloadedModules: Array<string> = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      if (route.path) {
        this.preloadedModules.push(route.path);
      }

      // log the route path to the console
      console.log('Preloaded: ', route.path);

      return load();
    } else {
      // tslint:disable-next-line:no-null-keyword
      return Observable.of(null);
    }
  }
}
