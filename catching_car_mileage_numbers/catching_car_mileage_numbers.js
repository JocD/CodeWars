function isInteresting(number, awesomePhrases) {
  let trailingZeros = /[1-9][0]+/g;
  let sameDigit = /(\d)\1+/g;

  let matchFunc = (num, regex) => {
    let match = num.match(regex);
    if (match) {
      match = match[0];
      return match.length === num.length
    }
    return false;
  };

  let checkPalindrome = (str) => {
    return str == str.split('').reverse().join('');
  };

  let checkInc = (str) => {
    return str.split('')
      .reduce((p, c, i, arr) => {
        let cur = parseInt(c);
        let prev = parseInt(arr[i - 1]);
        if (prev == 9) {
          return p && (cur == 0 && i + 1 == arr.length);
        }
        else {
          return p && (cur == prev + 1);
        }
      });
  };

  let checkDec = (str) => {
    return str.split('')
      .reduce((p, c, i, arr) => {
        let cur = parseInt(c);
        let prev = parseInt(arr[i - 1]);
        if (prev == 1) {
          return p && (cur == 0 && i + 1 == arr.length);
        }
        else {
          return p && (cur == prev - 1);
        }
      });
  };

  if (number > 97 && number < 1000000000) {
    let res = null;
    for (let j = 0; j <= 2; j++) {
      let num = (number + j).toString();
      if (num.length >= 3) {
        res = matchFunc(num, trailingZeros)
          || matchFunc(num, sameDigit)
          || checkPalindrome(num)
          || checkInc(num)
          || checkDec(num);

        if (res === true) {
          if (j === 0) {
            return 2;
          }
          else {
            return 1;
          }
        }
      }
    }

    for (let i = 0; i < awesomePhrases.length; i++) {
      if (number === awesomePhrases[i]) {
        return 2;
      }
      else if (Math.abs(awesomePhrases[i] - number) <= 2) {
        return 1;
      }
    }
  }
  return 0;
}


module.exports = isInteresting;