function solution(number) {
  let numStr = number.toString();
  let pos = Math.pow(10, numStr.length - 1);
  let ans = [];

  let roman = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']]);

  for (let i = 0; i < numStr.length; i++) {
    let d = parseInt(numStr[i]);
    if (d !== 0) {
      let e = d * pos;
      switch (d) {
        case 4:
        case 9:
          ans.push(roman.get(pos) + '' + roman.get(e + pos));
          break;
        case 1:
        case 5:
          ans.push(roman.get(e));
          break;
        default:
          let temp = '';
          for (let j = 0; j < d; j++) {
            if (d % 10 > 5) {
              temp += roman.get(5 * pos);
            }
            temp += roman.get(pos);
            d = d % 5
          }
          ans.push(temp);
      }
    }

    pos /= 10;
  }
  return ans.join('');
}

console.log(solution(11));
