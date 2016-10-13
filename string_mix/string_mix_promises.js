"use strict";
function countLetters(str, num) {
  return new Promise(
    function (resolve, reject) {
      let map = new Map();
      let numStr = num.toString() + ':';

      str.split('')
        .filter((c) => {
          return /[a-z]/.test(c);
        })
        .map((c) => {
          let key = numStr + c;
          if (map.has(key)) {
            map.set(key, map.get(key) + 1);
          }
          else {
            map.set(key, 1);
          }
        });

      map = [...map]
        .filter((c) => {
          return c[1] > 1;
        });

      resolve(map);
    });
}
function mix(s1, s2) {
  let p1 = countLetters(s1, 1);
  let p2 = countLetters(s2, 2);

  Promise.all([p1, p2])
    .then((values) => {
      let v1 = new Map(values[0]),
        v2 = new Map(values[1]),
        ans = [];

      v2.forEach((v, k, m) => {
        let key = k.toString()[2];
        let v1Key = '1:' + key;
        if (v1.has(v1Key)) {
          if (v1.get(v1Key) < v) {
            v1.delete(v1Key);
            v1.set(k, v);
          }

          else if (v1.get(v1Key) == v) {
            v1.delete(v1Key);
            v1.set('=:' + key, v);
          }
        }
        else {
          v1.set(k, v);
        }
      });

      v1 = [...v1]
        .sort((a, b) => {
          let s = b[1] - a[1];
          if(s == 0){
            s = a[0].charCodeAt(0) - b[0].charCodeAt(0);
            if(s == 0){
              s = a[0].charCodeAt(2) - b[0].charCodeAt(2);
            }
          }
          return s;
        });


      for (let i = 0; i < v1.length; i++) {
        let char = v1[i][0][2],
          num = v1[i][1],
          str = v1[i][0];
        for (let j = 1; j < num; j++) {
          str += char;
        }
        ans.push(str);
      }
      console.log('Inside: ' + ans.join('/'));
      return ans.join('/');
    });
}

console.log(mix("Are they here", "yes, they are here"));