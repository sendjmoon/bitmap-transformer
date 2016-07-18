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

// var redBitmap = function(startIndex, finishIndex, data) {
//   var averageColor = 0;
//   var num = 1;
//   for (var i = startIndex; i < finishIndex; i++) {
//     if (num % 4 !== 0) {
//       averageColor += data[i];
//       num++;
//     } else {
//       for (var j = startIndex; j < finishIndex; j--) {
//         data[i - j] = averageColor;
//       }
//       num++;
//       averageColor = 0;
//     }
//   }
// };

transformBitmap(__dirname + '/palette-bitmap.bmp', invertBitmap);
