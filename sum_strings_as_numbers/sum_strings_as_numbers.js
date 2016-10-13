function sumStrings(a, b) {
  let len = Math.max(a.length, b.length);
  let ans = [];
  let remainder = 0;

  a = a.split('').reverse();
  b = b.split('').reverse();

  for (let i = 0; i < len; i++) {
    let x = parseInt(a[i]) || 0;
    let y = parseInt(b[i]) || 0;
    let sum = x + y + remainder;
    if (sum >= 10) {
      sum = sum.toString().split('');
      remainder = parseInt(sum[0]);
      ans.unshift(parseInt(sum[1]));
    }

    else {
      ans.unshift(sum);
      remainder = 0;
    }
  }
  if (remainder === 1) {
    ans.unshift(remainder);
  }

  return ans.join('').replace(/\b0+/g, '');
}

module.exports = sumStrings;