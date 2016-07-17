const expect = require('chai').expect;
const fs = require('fs');

const invertBitmap = require('../lib/invertBitmap');
const restoreBitmap = require('../lib/restoreBitmap');

describe('hooks', function() {
  var fileData = [];
  var restoredFileData = [];

  before(function(done) {
    fs.readFile('../test/palette-bitmap.bmp', function(err, data) {
      fileData.push(data.toString());
      if(err) console.log(err);
      fs.readFile('../test/restored-palette-bitmap.bmp', function(err, data) {
        restoredFileData.push(data.toString());
        if(err) console.log(err);
        done();
      });
    });
  });

  it('should restore the bitmap', function(done) {
    expect(fileData.length).to.eql(1);
    expect(restoredFileData.length).to.eql(1);
    expect(fileData).to.eql(restoredFileData);
    done();
  });
});
