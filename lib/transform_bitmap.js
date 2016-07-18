const fs = require('fs');

var transformBitmap = function(file, transform) {
  fs.readFile(file, function(err, data) {
    if (err) return console.log(err);
    transform(54, 1077, data);
    fs.writeFile('./test/new-palette-bitmap.bmp', data);
  });
};

var invertBitmap = function(startIndex, finishIndex, data) {
  var num = 1;
  for (var i = startIndex; i < finishIndex; i++) {
    if (num % 4 !== 0) data[i] = 255 - data[i];
    num++;
  }
};

transformBitmap(__dirname + '/palette-bitmap.bmp', invertBitmap);
