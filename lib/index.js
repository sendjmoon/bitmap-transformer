const fs = require('fs');

var bitmap = './lib/palette-bitmap.bmp';

module.exports = function(file) {
  fs.readFile(file, function(err, data) {
    var startIndex = 54;
    var finishIndex = 1077;
    if (err) return console.log(err);
    for (var i = startIndex; i < finishIndex; i++) {
      if (i % 4 !== 0) data[i] = 255 - data[i];
    }
    fs.writeFile('./test/inverted-palette-bitmap.bmp', data);
  });
};
