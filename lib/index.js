const fs = require('fs');

var bitmap = 'palette-bitmap.bmp';

var transformBitmap = function() {
  fs.readFile(bitmap, function(err, data) {
    if(err) return console.log(err);
    if(data) console.log(data);
  });
};

transformBitmap();
