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
4. get editable _config_ data via _AppConfig_ service (using factory method to 
   initialize the data before the application starts up).
5. an alternative approach to read in editable data files are using _require_ 
   (see _experience.component.ts_ and _interest.component.ts_).
6. updated the test scripts:
   * use schemas to limit the scope of the components to be tested
   * use providers for service
   * import RouterTestingModule for routing related tests.

## TODO:
1. The layout of _router-outlet_ is calculated from the top (ignoring toolbar). An
   workaround is to pad several dummy lines (see _main.component.html_).