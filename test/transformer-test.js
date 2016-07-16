const expect = require('chai').expect;
const fs = require('fs');

const invertBitmap = require('../lib/invertBitmap');
const restoreInvertedBitmap = require('../lib/restoreInvertedBitmap');

describe('create an inverted bitmap of the original', function() {
  var originalBitmapArray = [];
  var invertBitmapArray = [];
  var restoredBitmapArray = [];
  before(function(done) {
    fs.readFile('./test/palette-bitmap.bmp', function(err, data) {
      if(err) console.log(err);
      originalBitmapArray.push(data.toString());
      done();
    });
  });

  it('the invert bitmap should be output', function(done) {
    invertBitmap('./test/palette-bitmap.bmp', function(err, data) {
      if(err) console.log(err);
      console.log('inverting bitmap');
      invertBitmapArray.push(data.toString());
    });
    done();
  });
  
  it('the restored bitmap should match the original bitmap', function(done) {
    restoreInvertedBitmap('./test/inverted-palette-bitmap.bmp', function(err, data) {
      console.log('restoring original bitmap');
      restoredBitmapArray.push(data.toString());
      expect(originalBitmapArray).to.eql(restoredBitmapArray);
    });
    done();
  });
});
