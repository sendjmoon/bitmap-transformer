# Bitmap Transformer
This is a Node.js application used to transform the colors of a bitmap image. Currently, it has the ability to invert the color palette of a given image and output the inverted result.

## Code Example
Below is a snippet of code for one of the modules. It reads buffer data from a file using the file share module. Then, it runs the designated transformation on the image.


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
