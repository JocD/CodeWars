var should = require('chai').should();

var sumStrings = require('./sum_strings_as_numbers');

describe('Sum strings as numbers', function(){
  describe('Tests', function(){
    it('Should return the sum of two numbers as a string', function(){
      sumStrings('123', '456').should.equal('579');
      sumStrings('', '5').should.equal('5');
      sumStrings('800', '9567').should.equal('10367');
      sumStrings('00103', '08567').should.equal('8670');
      sumStrings('712569312664357328695151392', '8100824045303269669937').should.equal('712577413488402631964821329');
    });
  });
});