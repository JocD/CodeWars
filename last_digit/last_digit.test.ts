import * as chai from 'chai';
import {lastDigit} from './last_digit';

let should = chai.should();

describe('Last Digit test', () => {
    it('Empty arrays, [0,0], and [0,0,0]', () => {
        lastDigit([]).should.eq(1);
        lastDigit([0, 0]).should.eq(1);
        lastDigit([0, 0, 0]).should.eq(0);
    });
    it('CodeWars test cases', () => {
        lastDigit([1,2]).should.eq(1);
        lastDigit([3,4,5]).should.eq(1);
        lastDigit([4,3,6]).should.eq(4);
        lastDigit([7,6,21]).should.eq(1);
        lastDigit([12,30,21]).should.eq(6);
        lastDigit([937640,767456,981242]).should.eq(0);
        lastDigit([123232,694022,140249]).should.eq(6);
        lastDigit([499942,898102,846073]).should.eq(6);
        lastDigit([697739,124111]).should.eq(9);
        lastDigit([530228,785151]).should.eq(2);

    });
});
