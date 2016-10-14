var should = require('chai').should();

var minHeap = require('./minHeap');

describe('Min Heap', function () {
  it('Constructor', function () {
    let mHeap = new minHeap();
    mHeap.should.be.an.instanceOf(minHeap);
    mHeap.size().should.equal(0);
    mHeap = new minHeap(1);
    mHeap.should.be.an.instanceOf(minHeap);
    mHeap.size().should.equal(1);
    mHeap = new minHeap([1, 2, 3]);
    mHeap.should.be.an.instanceOf(minHeap);
    mHeap.size().should.equal(3);
  });
  it('Insert', function () {
    let mHeap = new minHeap();
    let len = 10;
    mHeap.size().should.equal(0);
    for (let i = len; i > 0; i--) {
      mHeap.insert(Math.round(Math.random() * 10));
    }
    mHeap.size().should.equal(len);
  });
  it('Extract 1', function () {
    let mHeap = new minHeap();
    let len = 1000;
    for (let i = len; i > 0; i--) {
      if (!mHeap.contains(i)) {
        mHeap.insert(i);
      }
    }
    let prev = -1;
    for (let i = 0; i < len; i++) {
      let nPrev = mHeap.extract();
      nPrev.should.be.at.least(prev);
      prev = nPrev;
    }
  });
  it('Extract 2', function () {
    let mHeap = new minHeap();
    let len = 100;
    for (let i = 0; i < len; i++) {
      if (!mHeap.contains(2 * i)) {
        mHeap.insert(2 * i);
      }
      if (!mHeap.contains(3 * i)) {
        mHeap.insert(3 * i);
      }
      if (!mHeap.contains(5 * i)) {
        mHeap.insert(5 * i);
      }
    }
    let prev = -1;
    for (let i = 0; i < len; i++) {
      let nPrev = mHeap.extract();
      nPrev.should.be.at.least(prev);
      prev = nPrev;
    }
  });
});