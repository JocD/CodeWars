"use strict";
function counter(str) {
  let ans = new Map();

  str.split('')
    .filter((c) => {
      return /[a-z]/.test(c);
    })
    .map((c) => {
      if (ans.has(c)) {
        ans.set(c, ans.get(c) + 1);
      }
      else {
        ans.set(c, 1);
      }
    });

  return ans;
}

function mix(s1, s2) {
  let v1 = counter(s1);
  let v2 = counter(s2);
  let ans;

  v2.forEach((v2, k2, m2) => {
    if (v1.has(k2)) {
      if (v1.get(k2) < v2) {
        v1.delete(k2);
        v1.set('2:' + k2, v2);
      }

      else if (v1.get(k2) == v2) {
        v1.delete(k2);
        v1.set('=:' + k2, v2);
      }
    }

    else{
      v1.set('2:' + k2, v2);
    }
  });

  ans = [...v1]
    .filter((c) => {
      return c[1] > 1;
    })
    .map((c) => {
      if (!c[0].includes(':')) {
        return ['1:' + c[0], c[1]];
      }
      else {
        return c;
      }
    })
    .sort((a, b) => {
      return b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0) || a[0].charCodeAt(2) - b[0].charCodeAt(2);
    })
    .reduce((p, c) => {
      let str = c[0];
      for (let i = 1; i < c[1]; i++) {
        str += c[0][2];
      }
      p.push(str);
      return p;
    }, [])
    .join('/');

  return ans;
}

// mix("Are theyyy here", "yes, they are here");
console.log(mix(" In many languages", " there's a pair of functions"));