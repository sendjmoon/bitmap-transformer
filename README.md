# Bitmap Transformer
This is a Node.js application used to transform the colors of a bitmap image. Currently, it has the ability to invert the color palette of a given image and output the inverted result.

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
This Bitmap Transformer requires all files from the master branch to be pulled to a local machine. It also has dev dependencies for additional node packages used to create and test the results.

### Dev Dependencies
chai `npm install -D chai`
mocha `npm install -D mocha`
gulp `npm install -D gulp`
gulp-eslint `npm install -D gulp-eslint`
gulp-mocha `npm install -D gulp-mocha`
