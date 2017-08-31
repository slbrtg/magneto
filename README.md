# Magneto

#### By Saul Artiga, Lincoln Nguyen, Joel Bakken, and Laura Hamilton

## Description

This application acts as a legal open source archive of different media that the user can download. This application is a demonstration of JavaScript Angular using Firebase database with multiple page routes. A user can search the archives held on firebase, create new archives, delete specific archive entries, edit existing archives, and use the magnet links to download the content.

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## System Requirements

* npm 3 or higher
* bower
* Firebase Account

## Installation
|Follow these steps to launch the application|
|---|
|1.) Clone project from github|
|2.) Navigate to the project folder|
|3.) In the console: npm install|
|4.) In the console: bower install bootstrap --save|
|5.) Create a api-keys.ts file within the src/app/ folder|
|6.) Place this code in the api-keys.ts file and replace the "x" characters with your own credentials from your own firebase app code:
 export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };|
|---|
|7.) Within Firebase, go to the Database page, and select Import JSON from the right side of the page within the verticle ... button and select the torrent-export.json file from the magneto project folder|
|8.) Once the sample archives have been uploaded successfully in your firebase, go to the Rules tab at the top of your firebase dashboard and make the .read and .write functions equal to "true" instead of the null values|
|9.) In the console: ng serve|
|10.) (optional) If the build is unsuccessful and you see a "polyfill" error, run this in the console before trying the ng serve command again: npm install promise-polyfill --save-exact|
|11.) Navigate to http://localhost:4200/|

## Technologies Used

* TypeScript
* Bootstrap
* Bower
* Firebase
* Angular
* npm

## Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User clicks on the Disclaimer link and they are redirected to an Disclaimer page|User clicks on Diclaimer in the header|User is taken to the Disclaimer page|

### Legal

This software is licensed under the MIT license.
