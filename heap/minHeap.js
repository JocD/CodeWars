class MinHeap {
  constructor(input) {
    if (input === undefined) {
      this.arr = [];
    }
    else if (Number.isInteger(input)) {
      this.arr = [input];
    }

    else if (Array.isArray(input)) {
      this.arr = input;
    }
  }

  insert(num) {
    let i = this.arr.push(num) - 1;
    do {
      let parent = Math.floor((i - 1) / 2);
      if (this.arr[parent] > this.arr[i]) {
        let temp = this.arr[parent];
        this.arr[parent] = this.arr[i];
        this.arr[i] = temp;
        i = parent;
      }

      else {
        break;
      }
    } while (i > 0)
  }

  peek() {
    return this.arr[0];
  }

  extract() {
    let i = 0;
    let ret = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    do {
      let child1 = i * 2 + 1;
      let child2 = i * 2 + 2;
      let min = Math.min(this.arr[child1] || Number.MAX_SAFE_INTEGER, this.arr[child2] || Number.MAX_SAFE_INTEGER);
      let child = min === this.arr[child1] ? child1 : child2;
      if (this.arr[child] < this.arr[i]) {
        let temp = this.arr[child];
        this.arr[child] = this.arr[i];
        this.arr[i] = temp;
        i = child;
      }

      else {
        break;
      }
    } while (i < this.arr.length);
    return ret;
  }

  contains(num) {
    return this.arr.includes(num);
  }

  size() {
    return this.arr.length;
  }
}

module.exports = MinHeap;