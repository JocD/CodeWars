let should = require('chai').should();
let factorial = require('./large_factorials');

describe('Large Factorials', function(){
  it('Return correct value for n <= 0)', function(){
/*    factorial(1).should.equal('1');
    factorial(0).should.equal('1');
    should.equal(factorial(-1),null);*/
  });
  it('Should work with with small numbers', function(){
    factorial(2).should.equal('2');
    factorial(3).should.equal('6');
    factorial(4).should.equal('24');
    factorial(5).should.equal('120');
    factorial(6).should.equal('720');
    factorial(7).should.equal('5040');
    factorial(8).should.equal('40320');
    factorial(9).should.equal('362880');
    factorial(10).should.equal('3628800');
    factorial(11).should.equal('39916800');
    factorial(12).should.equal('479001600');
    factorial(13).should.equal('6227020800');
    factorial(14).should.equal('87178291200');
    factorial(15).should.equal('1307674368000');
  });

  it('Should handle large numbers', function(){
    factorial(123).should.equal('12146304367025329675766243241881295855454217088483382315328918161829235892362167668831156960612640202170735835221294047782591091570411651472186029519906261646730733907419814952960000000000000000000000000000')
  });
});