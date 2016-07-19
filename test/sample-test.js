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
it('should return an array', function(){
        expect(Array.isArray(current)).to.be.true;
      });

    it('should return the same array', function(){
      expect(expected.length).to.equal(current.length);
      for (var i=0; i<expected.length; i++) {
        expect(expected[i]).equal(current[i]);
      }
    })
  })
