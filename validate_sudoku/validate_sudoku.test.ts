/// <reference path="../typings/mocha/mocha.d.ts" />
import * as chai from 'chai';
import {Sudoku} from './validate_sudoku'

let should = chai.should();

let goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

let goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);

let badSudoku1 = new Sudoku([
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 3, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 3, 3, 3, 3, 3, 1],

    [1, 2, 3, 4, 4, 4, 4, 4, 1],
    [1, 2, 3, 5, 5, 5, 5, 5, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 1],

    [1, 2, 3, 4, 5, 6, 7, 8, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 1]
]);

let badSudoku2 = new Sudoku([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]
]);

describe('Valid _checkSize', function () {
    it('Validate _checkSize', function () {
        badSudoku1._checkSize().should.equal(true);
        badSudoku2._checkSize().should.equal(false);
        goodSudoku1._checkSize().should.equal(true);
        goodSudoku2._checkSize().should.equal(true);
    });
});

describe('Validate _checkRow', function () {
    it('All of BadSudoku\'1s rows should return false', async function () {
        let size = badSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        for (let x = 0; x < size; x++) {
            res[x] = badSudoku1._checkRow(x);
        }

        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(false);
            });
        });

    });
    it('All of GoodSudoku\'1s rows should return true', function () {
        let size = goodSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        for (let x = 0; x < size; x++) {
            res[x] = goodSudoku1._checkRow(x);
        }

        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(true);
            });
        });
    });

    it('All of GoodSudoku\'1s rows should return true', function () {
        let size = goodSudoku2._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        for (let x = 0; x < size; x++) {
            res[x] = goodSudoku2._checkRow(x);
        }

        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(true);
            });
        });
    });
});

describe('Validate _checkColumn', function () {
    it('All of BadSudoku\'1s columns should return false', function () {
        let size = badSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        for (let y = 0; y < size; y++) {
            res[y] = badSudoku1._checkColumn(y);
        }
        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(false);
            });
        });
    });
    it('All of GoodSudoku\'1s columns should return true', function () {
        let size = goodSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        for (let y = 0; y < size; y++) {
            res[y] = goodSudoku1._checkColumn(y);
        }
        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(true);
            });
        });
    });
});

describe('Validate _checkBox', function () {
    it('All of BadSudoku\'1s boxes should return false', function () {
        let size = badSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        let i = 0;
        for (let x = 0; x < size; x = x + 3) {
            for (let y = 0; y < size; y = y + 3) {
                res[i++] = badSudoku1._checkBox(x, y);
            }
        }
        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(false);
            });
        });
    });
    it('All of GoodSudoku\'1s boxes should return true', function () {
        let size = goodSudoku1._getSize();
        let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size);
        let i = 0;
        for (let x = 0; x < size; x = x + 3) {
            for (let y = 0; y < size; y = y + 3) {
                res[i++] = goodSudoku1._checkBox(x, y);
            }
        }
        Promise.all(res).then((val) => {
            val.map((c) => {
                c.should.equal(true);
            });
        });
    });
});


describe('Run all validation checks', function () {
    it('Both BadSudoku\'s should return false', async function () {
        let ans = await badSudoku1.isValid();
        ans.should.equal(false);

        ans = await badSudoku2.isValid();
        ans.should.equal(false);
    });
    it('Both GoodSudoku\'s should return true', async function () {
        let ans = await goodSudoku1.isValid();
        ans.should.equal(true);

        goodSudoku2.isValid();
        ans.should.equal(true);
    });
});
