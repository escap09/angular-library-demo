# Angular 6 Library Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This `my-lib` libraray is created by angular CLI `ng g library <lib-name>` command. It creates the libraray with all the essential artifacts under projects directory.

It is using [dherges/ng-packagr](https://github.com/dherges/ng-packagr) internally for maintaining and creating the library and hiding its complexity and doing most of the work just by CLI command.

app from `libraray-demo` project is using `<ml-my-lib>` component and `MyLibService` from `my-lib` library project. It is importing `MyLibModule` which is making both of the component and service available in app project.

``` typescript 
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. This command first builds the libraray and makes it available to the `library-demo` app and then serves it. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the libraray and app both. The build artifacts will be stored in the `dist/` directory. Use `npm run build:app` and `npm run build:lib` for building the app and library.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
