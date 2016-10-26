import * as chai from 'chai';
import * as BigInteger from './big_integer';

let should = chai.should();
let numTests = 10000;
describe('BigInteger.add', () => {
    it('Should work with small numbers', () => {
        for (let i = 0; i <= numTests; i++) {
            BigInteger.add([
                [i.toString()],
                [i.toString()]
            ]).should.equal((i * 2).toString(), `BigInteger.add ${i} + ${i} did not add up to ${i * 2}`);
        }
    });

    it('Randomized small number test', () => {
        for (let i = 0; i <= numTests; i++) {
            let input = [];
            for (let j = 0; j <= 6; j++) {
                input.push([(Math.round(Math.random() * 100)).toString()]);
            }
            let sum = 0;
            for (let i = 0; i < input.length; i++) {
                sum += parseInt(input[i].join(''));
            }
            BigInteger.add(input).should.equal(sum.toString(), `BigInteger.add ${input.toString()} did not add up to ${sum}`);
        }
    });

    it('Should work with large numbers', () => {
        let input = [];
        input.push(['123456789012345678901234567890']);
        input.push(['123456789012345678901234567890']);
        BigInteger.add(input).should.equal('246913578024691357802469135780');

        input = [];
        input.push(['123456789012345678901234567890']);
        input.push(['23123456789012345678901234567890']);
        BigInteger.add(input).should.equal('23246913578024691357802469135780');
    });
});

describe('BigInteger.multiply', () => {
    it('Should work with small numbers', () => {
        for (let i = 1; i <= numTests; i++) {
            BigInteger.multiply(i, i).should.equal((i * i).toString(), `BigInteger.multiply(${i},${i}) did not equal ${i * i}`);
        }
    });

    it('Randomized small number test', () => {
        for (let i = 0; i <= numTests; i++) {
            let num1 = Math.round(Math.random() * 10);
            let num2 = Math.round(Math.random() * 10);
            let prod = num1 * num2;
            BigInteger.multiply(num1,num2).should.equal(prod.toString(), `BigInteger.multiply(${num1},${num2}) did not equal up to ${prod}`);
        }
    });

    it('Should work with large numbers', () => {
       BigInteger.multiply('590295810358705651712', 2).should.equal('1180591620717411303424');
    });
});

describe('BigInteger.pow', () => {
    it('Should work with small numbers', () => {
        for (let i = 1; i <= 14; i++) {
            BigInteger.pow(i, i).should.equal((Math.pow(i,i)).toString(), `BigInteger.pow(${i},${i}) did not equal ${Math.pow(i,i)}`);
        }
    });

    it('Randomized small number test', () => {
        for (let i = 0; i <= numTests; i++) {
            let num1 = Math.round(Math.random() * 10);
            let num2 = Math.round(Math.random() * 10);
            let prod = Math.pow(num1,num2);
            BigInteger.pow(num1,num2).should.equal(prod.toString(), `BigInteger.pow(${num1},${num2}) did not equal up to ${prod}`);
        }
    });

    it('Should work with large numbers', () => {
        BigInteger.pow(15,15).should.equal('437893890380859375');
    });
});

describe('BigInteger.mod', () => {
    it('Tests', () => {
       BigInteger.mod4(4,5).should.eq(0);
       BigInteger.mod4(3,6).should.eq(1);
       BigInteger.mod4(6,21).should.eq(0);
       BigInteger.mod4(30,21).should.eq(0);
    });
});