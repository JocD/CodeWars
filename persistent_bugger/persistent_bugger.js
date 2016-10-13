"use strict";
function persistence(num) {
  let ans = 0;
  while(num >= 10) {
    let numArr = num.toString().split('');
    num = numArr.reduce((p, c) => {
      return Number.parseInt(p) * Number.parseInt(c);
    });
    ans++;
  }

  return ans;
}

console.log(persistence(39));
console.log(persistence(25));