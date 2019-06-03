# nico.dev
The code that powers my personal portfolio on [nico.dev](https://nico.dev/).

This website is packed with countless hours of open source contributions. That's why I decided to publish the whole source code under the [MIT License](https://github.com/nico-martin/nico.dev/blob/master/LICENSE).  
In other words: you are free to use it for anything you want:  
[github.com/nico-martin/nico.dev/](https://github.com/nico-martin/nico.dev/)

## Frontend

This app uses the following libraries:

- [Preact  v8.4.2](https://preactjs.com/): A small but powerful frontend framework.
- [Preact router v2.6.1](https://github.com/preactjs/preact-router): A preact-component that handles URLs and the browser history.
- [idb v4.0.3](https://github.com/jakearchibald/idb): An IndexedDB abstraction that works with JavaScrip Promises

## Progressive Web App

This app can also be used offline by using a ServiceWorker powered by [WorkboxJS](https://developers.google.com/web/tools/workbox/)

## Backend

For this project I created a Tool that parses any Google Spreadsheet and returns a JSON Endpoint:  

[GoogleSheet Publish to JSON](https://github.com/nico-martin/googlesheet-publish-to-json)

Needless to say that this tool is open source as well.