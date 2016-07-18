const fs = require('fs');

var redTransform = function() {
  fs.readFile('../test/palette-bitmap.bmp', function(err, data) {
    if (err) console.log(err);
    var averageColor = 0;
    for (var i = 54; i < 1078; i++) {
      if(i % 4 !== 0) {
        averageColor += data[i];
      } else {
        for (var j = 3; j > 0; j--) {
          data[i - j] = averageColor / 256;
          averageColor = 0;
        }
      }
    }
    fs.writeFile('../test/red-palette-bitmap.bmp', data);
  });
};

redTransform();
