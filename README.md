### Bitmap Transformer
This project uses Node.js to change a bitmap image's color by manipulating hex values collected from buffered data. Currently, it has the ability to invert the color palette of a given image and output the inverted result.

## Code Example
Below is a snippet of code for one of the modules. It reads buffer data from a file using the file system module of Node. Then, it uses a callback function to specify the designated transformation. Finally, it accepts a string to name the new file with.


```javascript
const fs = require('fs');

var transformBitmap = module.exports = exports = function(file, cb, newFileName) {
  fs.readFile(file, function(err, data) {
    if (err) return console.log(err);
    cb(54, 1077, data);
    fs.writeFile('./test/' + newFileName + '-palette-bitmap.bmp', data);
  });
};

transformBitmap.invert = function(startIndex, finishIndex, data) {
  var num = 1;
  for (var i = startIndex; i <= finishIndex; i++) {
    if (num % 4 !== 0) data[i] = 255 - data[i];
    num++;
  }
};
```

## Installation
This Bitmap Transformer requires you to clone down the project repo onto your local machine. The next step is to use `npm` to install dependencies via the `command line` from your `terminal`. It also has dev dependencies for additional node packages used to create and test the results.

### Dev Dependencies
chai `npm install -D chai`

mocha `npm install -D mocha`

gulp `npm install -D gulp`

gulp-eslint `npm install -D gulp-eslint`

gulp-mocha `npm install -D gulp-mocha`

## Tests
To run the test from the terminal's CLI, simply type `npm start`. This will use `gulp` to run an `eslint` test on all files while also running a `mocha` test on all test files to verify results.

The test asserts a match in color from the palette of the original image, as well as the inverted image, and finally the image restored from the invert.

## Known Bugs
When running `npm start` it needs to be run twice because the first iteration of the test won't recognize a newly created bitmap image exists. Upon running a second time it will successfully read the produced file from the first run.

## A File Manifest
There are separate folders and files in the project repo to make it easier to locate files for developers.

## Activity
For commits and previous code, check our branches or the graphs tab near the top of the repo page.

## Authors
James Moon & Gurpreet Singh
