var chai = require('chai');
var should = chai.should();

var pigIt = require('./simple_pig_latin.js');

 describe('Simple Pig Latin', function() {
   describe('Tests', function() {
     it('Strings should match', function() {
       pigIt('Pig latin is cool').should.equal('igPay atinlay siay oolcay');
       pigIt('This is my string').should.equal('hisTay siay ymay tringsay');
     });
   });
 });