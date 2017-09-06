# Get Involved (public frontend) [![Build Status](https://travis-ci.org/scvodigital/milo-frontend.svg?branch=master)](https://travis-ci.org/scvodigital/milo-frontend)

[![Dependency Status](https://david-dm.org/scvodigital/milo-frontend/master.svg)](https://david-dm.org/scvodigital/milo-frontend/master) [![devDependency Status](https://david-dm.org/scvodigital/milo-frontend/master/dev-status.svg)](https://david-dm.org/scvodigital/milo-frontend/master?type=dev)

This is the repository for the Get Involved website, it contains the codebase for the public website. Deployment instructions are detailed below.

## Installation
```
git clone https://github.com/scvodigital/milo-frontend
cd milo-frontend
sudo npm i -g typescript firebase-tools @angular/cli
npm i
```

## Run Development Server
```
npm start
```
Navigate to [localhost:9011](http://localhost:9011). The app will automatically reload if you change any of the source files.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve` or `npm start`.

## Live Deployment
### CI
There is continuous integration via [Travis](https://travis-ci.org) on `git push` which automatically deploys to [Google Firebase](https://firebase.google.com) CDN hosting.

### Manually
```
npm run deploy
```
This builds minified code and deploys via Firebase.

## Information
The repository [wiki](https://github.com/scvodigital/milo-frontend/wiki) will contain project documentation.

The website address is [getinvolved.scot](https://getinvolved.scot).

* [Documentation](https://github.com/scvodigital/milo-frontend/wiki)
* [Bug tracker](https://github.com/scvodigital/milo-frontend/issues)

## Technical Specs
This is an [Angular](https://angular.io) app using [TypeScript](https://www.typescriptlang.org).

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.
