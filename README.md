# Resume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development setup

1. rm yarn.lock (in favor of npm.lock)
2. install @angular/material, @angular/cdk, @angular/flex-layout, rxjs
3. add port entries in angular.json (server in 4268 and e2e in 4269)
4. update karma.conf.js to use ChromeHeadless, singleRun, and not watch
5. update protractor.conf.js to use headless argument for e2e test
6. update core-js to resolve a compilation error

## Dev

1. create sidenav, main components by using ``ng create component``
2. the two newly created components contain a button to emit event, and the 
   parent component, app.component, monitors the event (via html) and open/close
   sidenav accordingly.
3. introduce a custom stylesheet, assets/data/custom.scss, to customize the style. 