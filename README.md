<h1 align="center"> Droidscript SDK </h1>

[![npm version](https://badge.fury.io/js/droidscript-sdk.svg)](https://badge.fury.io/js/droidscript-sdk)
[![CI](https://github.com/RodnyE/droidscript-sdk/actions/workflows/webpack.yml/badge.svg)](https://github.com/RodnyE/droidscript-sdk/actions/workflows/webpack.yml)

droidscript-sdk is a lightweight and modular alternative to the traditional app.js file used in [DroidScript](https://droidscript.org) hybrid applications. 
This project allows you to import only the components you need, making your code more efficient and easier to maintain.

> This is an unofficial alternative and does not have all the methods that the original API provides (for now)

## Installation

You can install droidscript-sdk using npm:

```bash
npm install droidscript-sdk
``` 

## Setup

You can import all the modules from droidscript-sdk using ES6 import syntax (recommend use a bundler like webpack):

```javascript
import * as droid from 'droidscript-sdk'

droid.start();

droid.sendSMS('Sended from my Droidscript App!', '+1 23456789');
droid.showPopup('SMS sended');

if (droid.isAPK()) {
  ds.showPopup('You are in a compiled apk');
}

```

droidscript-sdk also includes a pre-built version of the library that can be imported directly into your HTML:

```html
<script src="./droid.min.js"></script>
```
or 
```html
<script src="https://cdn.jsdelivr.net/npm/droidscript-sdk/dist/droid.min.js"></script>
```

This will expose a global `droid` variable that you can use to access the library's functionality.

## Usage

All methods exposed by this API are similar to the original DroidScript methods,
but they start with lowercase letters.

For example:
```javascript
// after
app.WriteFile('/sdcard/Documents/example.txt', 'Hello world !');
app.ShowPopup('I am a popup');

// now in droidscript-sdk :)
droid.writeFile('/sdcard/Documents/example.txt', 'Hello world !');
droid.showPopup('I am a popup'); 
```

## Contributing

There are still many methods to add.
We welcome contributions to droidscript-sdk. 
Please submit a pull request with your proposed changes.
