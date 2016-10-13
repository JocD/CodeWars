"use strict";

/*function digPow(n, p) {
 // Convert n to string to get individual digits
 let digits = n.toString(),
 len = digits.length,
 sum = 0,
 ret;

 // Go through digits, transforming each string digit to a integer via parseInt and then apply Math.pow to the pth power
 // Add the result to sum
 // Increment p by 1 after each run
 for (let i = 0; i < len; i++) {
 sum += Math.pow(parseInt(digits.charAt(i)), p++);
 }

 // Divide sum by original number and store value for easy reference later
 ret = sum / n;

 // If ret is an intger, return ret. Else, return -1
 return Number.isInteger(ret) ? ret : -1;
 }*/

function digPow(n, p) {
  // Convert to string and split to get individual digits
  let ans = n.toString().split('')
      .map((d, i) => {
        // d = current digit
        // i = current index (starting at 0)
        // Get the products of each digit to the appropriate power (p + i)
        return Math.pow(d, p + i);
      })
      .reduce((a, b) => {
        // a = previous value;
        // b = current value
        // Get the sum of all the values
        return a + b;
      }) / n; //Divide by original number

  // If ans is an integer, return ans. Else return -1
  return Number.isInteger(ans) ? ans : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));