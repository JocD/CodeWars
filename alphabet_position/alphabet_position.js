"use strict";
function alphabetPosition(text) {
  let base = 96,
    ans = text.toLowerCase().split('')
      .filter((c) => {
        return (/[a-z]/i).test(c);
      })
      .map((c) => {
        return c.charCodeAt() - base;
      })
      .join(' ');

  return ans.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));