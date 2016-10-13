var chai = require('chai');
var should = chai.should();

var nbrOfLaps = require('./two_joggers');

describe('Two Joggers', function() {
  describe('Tests', function() {
    it('Should match', function() {
      nbrOfLaps(5,3).should.deep.equal([3,5]);
      nbrOfLaps(4,6).should.deep.equal([3,2]);
      nbrOfLaps(5,5).should.deep.equal([1,1]);
    });
  });
});