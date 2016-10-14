var should = require('chai').should();

var hamming = require('./hamming_number');


describe('Hamming Numbers', function () {
  it('Tests', function () {
    hamming(1).should.equal(1);
    hamming(2).should.equal(2);
    hamming(3).should.equal(3);
    hamming(4).should.equal(4);
    hamming(5).should.equal(5);
    hamming(6).should.equal(6);
    hamming(7).should.equal(8);
    hamming(8).should.equal(9);
    hamming(9).should.equal(10);
    hamming(10).should.equal(12);
    hamming(11).should.equal(15);
    hamming(12).should.equal(16);
    hamming(13).should.equal(18);
    hamming(14).should.equal(20);
    hamming(15).should.equal(24);
    hamming(16).should.equal(25);
    hamming(17).should.equal(27);
    hamming(18).should.equal(30);
    hamming(19).should.equal(32);
  });
  it('Testing first 5000 Hamming Numbers', function () {
    for (let i = 1; i <= 5000; i++) {
     hamming(i);
     }
  });
});