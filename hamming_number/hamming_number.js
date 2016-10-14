let MinHeap = require('../heap/minHeap');
function hamming(n) {
  let heap = new MinHeap(1);
  let min = heap.peek();

  for (let i = 0; i < n; i++) {
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
  }
  return min;
}

module.exports = hamming;