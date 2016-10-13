"use strict";
function tripledouble(num1, num2) {
  let num = -1,
    match1 = num1.toString().match(/([0-9])\1{2}/g),
    match2 = false;

  if (match1) {
    for(let i = 0; i < match1.length && match2 != true; i++)
    {
      num = match1[i][0];
      match2 = new RegExp(`([${num}])\\1{1}`).test(num2);
    }
  }

  return match1 && match2 ? 1 : 0;
}

console.log(tripledouble(666189888333222300, 2828938822));