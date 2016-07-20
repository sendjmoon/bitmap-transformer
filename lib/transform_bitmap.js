const fs = require('fs');

var transformBitmap = module.exports = exports = function(file, cb, newFileName) {
  fs.readFile(file, function(err, data) {
    if (err) return console.log(err);
    cb(54, 1077, data);

    // One of the assignment parameters is to read in some of the bitmap meta data (header data) and use it in some fashion. You could do that here instead of manually specifying your start and end indices.//

    fs.writeFile('./test/' + newFileName + '-palette-bitmap.bmp', data);

    // Right now your transformer only writes to your test directory, but you might want to include some flexibility since it wouldn't make sense to always write a transformed bitmap there.//
  });
};

transformBitmap.invert = function(startIndex, finishIndex, data) {
  var num = 1;
  for (var i = startIndex; i <= finishIndex; i++) {
    if (num % 4 !== 0) data[i] = 255 - data[i];
    num++;
  }
};
