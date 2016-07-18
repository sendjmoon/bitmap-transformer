const expect = require('chai').expect;
const fs = require('fs');

const transformBitmap = require('../lib/transform_bitmap');

describe('creates a new bitmap file with the color inverted', function() {
  var fileData = [];
  var restoredFileData = [];
  var colorOne = [0];
  var colorTwo = [0];

  before(function(done) {
    transformBitmap(__dirname + '/palette-bitmap.bmp', transformBitmap.invert, 'new');
    transformBitmap(__dirname + '/new-palette-bitmap.bmp', transformBitmap.invert, 'restored');
    fs.readFile(__dirname + '/palette-bitmap.bmp', function(err, data) {
      if(err) console.log(err);
      fileData.push(data.toString());
      colorOne[0] = data[0];
      colorOne[1] = data[1];
      colorOne[2] = data[2];
      fs.readFile(__dirname + '/restored-palette-bitmap.bmp', function(err, bitmapData) {
        if(err) console.log(err);
        restoredFileData.push(bitmapData.toString());
        colorTwo[0] = bitmapData[0];
        colorTwo[1] = bitmapData[1];
        colorTwo[2] = bitmapData[2];
        done();
      });
    });
  });

  it('the restored bitmap image should match the original bitmap image', function(done) {
    expect(fileData.length).to.eql(1);
    expect(restoredFileData.length).to.eql(1);
    expect(fileData).to.eql(restoredFileData);
    done();
  });
});
