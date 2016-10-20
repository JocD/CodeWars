let should = require('chai').should();

let stripUrlParams = require('./strip_url_params.js').stripUrlParams;

describe('Test', function () {
  it('Should remove duplicate query string entries', function () {
    stripUrlParams('www.codewars.com?a=1&b=2&a=2').should.equal('www.codewars.com?a=1&b=2');
  });
  it('Should remove query string arguments specified in the second argument', function(){
    stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']).should.equal('www.codewars.com?a=1');
  });
  it('Return the URL if there is no query string', function(){
    stripUrlParams('www.codewars.com').should.equal('www.codewars.com');
  });
});