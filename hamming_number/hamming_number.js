let MinHeap = require('../heap/minHeap');
function* hammingGen(n) {
  let heap = new MinHeap(1);
  let min = heap.peek();
  let i = 0;
  while (true) {
    let factor2 = 2 * min;
    let factor3 = 3 * min;
    let factor5 = 5 * min;

    if (!heap.contains(factor2)) {
      heap.insert(factor2);
    }

    if (!heap.contains(factor3)) {
      heap.insert(factor3);
    }

    if (!heap.contains(factor5)) {
      heap.insert(factor5);
    }
    min = heap.extract();
    i++;
    yield min;
  }
}
let helper = hammingGen(1);
function hamming(n){
  return helper.next().value;
}

module.exports = hamming;