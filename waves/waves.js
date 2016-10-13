"use strict";
function draw(input) {
  let max = Math.max.apply(null, input),
    ret = '';
  for (var z = 0; z < max; z++) {
    ret += input.map((d) => { return d >= max - z ? '■' : '□'}).reduce((p,c) => { return p + c}) + '\n';
  }
  return ret.trim();
}

console.log(draw([1, 2, 3, 4]));
console.log(draw([1, 2, 3, 3, 2, 1]));
console.log(draw([5, 3, 1, 2, 4, 6, 5, 4, 2, 3, 5, 2, 1]));
console.log(draw([2, 1, 5, 5, 10, 7, 6, 4]));
