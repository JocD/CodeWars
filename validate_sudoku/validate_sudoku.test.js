let should = require('chai').should();
let Sudoku = require('./validate_sudoku.js').Sudoku;


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
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]);

let badSudoku2 = new Sudoku([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1]
]);

describe('Tests', function () {
  it('Validate _checkSize', function () {
    badSudoku1._checkSize().should.equal(true);
    badSudoku2._checkSize().should.equal(false);
    goodSudoku1._checkSize().should.equal(true);
    goodSudoku2._checkSize().should.equal(true);
  });
});

describe('Validate _checkRow', function () {
  it('All of BadSudoku\'1s rows should return false', function () {
    let size = badSudoku1._getSize();
    for (let x = 0; x < size; x++) {
      badSudoku1._checkRow(x).should.equal(true);
    }
  });
  it('All of GoodSudoku\'1s rows should return true', function () {
    let size = goodSudoku1._getSize();
    for (let x = 0; x < size; x++) {
      goodSudoku1._checkRow(x).should.equal(true);
    }
  });
});

describe('Validate _checkColumn', function () {
  it('All of BadSudoku\'1s columns should return false', function () {
    let size = badSudoku1._getSize();
    for (let y = 0; y < size; y++) {
      badSudoku1._checkColumn(y).should.equal(false);
    }
  });
  it('All of GoodSudoku\'1s columns should return true', function () {
    let size = goodSudoku1._getSize();
    for (let y = 0; y < size; y++) {
      goodSudoku1._checkColumn(y).should.equal(true);
    }
  });
});

describe('Validate _checkBox', function () {
  it('All of BadSudoku\'1s boxes should return false', function () {
    let size = badSudoku1._getSize();
    for (let x = 0; x < size; x = x + 3) {
      for (let y = 0; y < size; y = y + 3) {
        badSudoku1._checkBox(x, y).should.equal(false);
      }
    }
  });
  it('All of GoodSudoku\'1s boxes should return true', function () {
    let size = goodSudoku1._getSize();
    for (let x = 0; x < size; x = x + 3) {
      for (let y = 0; y < size; y = y + 3) {
        goodSudoku1._checkBox(x, y).should.equal(true);
      }
    }
  });
});
describe('Run all validation checks', function () {
  it('Both BadSudoku\'s should return false', function () {
    badSudoku1.isValid().should.equal(false);
    badSudoku2.isValid().should.equal(false);
  });
  it('Both GoodSudoku\'s should return true', function () {
    goodSudoku1.isValid().should.equal(true);
    goodSudoku2.isValid().should.equal(true);
  });
});
