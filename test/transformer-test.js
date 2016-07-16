const expect = require('chai').expect;
const fs = require('fs');

const async = require('../lib/index');

describe('async read data', function() {
  var bufferData = [];
  before(function(done) {
    fs.readFile('./test/palette-bitmap.bmp', function(err, data) {
      if(err) console.log(err);
      bufferData.push(data.toString());
      done();
    });
  });
  it('should match the metadata', function(done) {
    var bufferArray = [];
    fs.readFile('./test/re-inverted-palette-bitmap.bmp', function(err, fileData) {
      expect(err).to.eql(null);
      bufferArray.push(fileData.toString());
      expect(bufferArray).to.eql(bufferData);
      done();
    });
  });
});
