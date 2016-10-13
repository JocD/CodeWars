"use strict";
function createPhoneNumber(numbers){
  let numString = numbers.join('');
  return `(${numString.substr(0,3)}) ${numString.substr(3,3)}-${numString.substr(6,4)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));