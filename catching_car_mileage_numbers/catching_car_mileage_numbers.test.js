var should = require('chai').should();

var isInteresting = require('./catching_car_mileage_numbers');

describe('Catching Car Mileage Numbers', function () {
  it('Number matches something in the awesomePhrases array', function () {
    isInteresting(304, [1337, 256]).should.equal(0);
    isInteresting(1337, [1337, 256]).should.equal(2);
    isInteresting(253, [1337, 256]).should.equal(0);
    isInteresting(254, [1337, 256]).should.equal(1);
    isInteresting(255, [1337, 256]).should.equal(1);
    isInteresting(256, [1337, 256]).should.equal(2);
  });
  it('Automatically discard numbers that are out of bounds', function () {
    isInteresting(2, []).should.equal(0);
    isInteresting(1000000000, []).should.equal(0);
  });
  it('Trailing 0\'s', function () {
    isInteresting(98, []).should.equal(1);
    isInteresting(99, []).should.equal(1);
    isInteresting(100, []).should.equal(2);
    isInteresting(998, []).should.equal(1);
    isInteresting(1000, []).should.equal(2);
    isInteresting(1002, []).should.equal(0);
    isInteresting(10000, []).should.equal(2);
    isInteresting(1000000, []).should.equal(2);
    isInteresting(999998, []).should.equal(1);
  });
  it('All the same digits', function () {
    isInteresting(108, []).should.equal(0);
    isInteresting(109, []).should.equal(1);
    isInteresting(110, []).should.equal(1);
    isInteresting(111, []).should.equal(2);
    isInteresting(2210, []).should.equal(0);
    isInteresting(2222, []).should.equal(2);
    isInteresting(2223, []).should.equal(0);
    isInteresting(999999, []).should.equal(2);
    isInteresting(999998, []).should.equal(1);
  });

  it('Palindrome', function () {
    isInteresting(12321, []).should.equal(2);
    isInteresting(11111, []).should.equal(2);
    isInteresting(5445, []).should.equal(2);
    isInteresting(301, [1337, 256]).should.equal(1);
  });

  it('Incrementing numbers', function () {
    isInteresting(1234, []).should.equal(2);
    isInteresting(1230, []).should.equal(0);
    isInteresting(1232, []).should.equal(1);
    isInteresting(1244, []).should.equal(0);
    isInteresting(67890, []).should.equal(2);
  });

  it('Decrementing numbers', function () {
    isInteresting(4321, []).should.equal(2);
    isInteresting(4322, []).should.equal(0);
    isInteresting(43210, []).should.equal(2);
    isInteresting(9876, []).should.equal(2);
    isInteresting(9875, []).should.equal(1);
    isInteresting(9873, []).should.equal(0);
  });

});