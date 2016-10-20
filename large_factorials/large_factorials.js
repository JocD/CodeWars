function factorial(n) {
  if (n === 0 || n === 1) {
    return '1';
  }

  else if (n < 0) {
    return null;
  }

  else {
    let nStr = n.toString().split('');
    let nStr2 = factorial(n - 1).split('');
    let matrix = [];
    let len = nStr2.length + nStr.length;
    let prod = 0;
    let offset = 0;

    for (let i = nStr2.length - 1; i >= 0; i--) {
      let arr = new Array(len);
      arr.fill(0);
      let arrIndex = len - 1;
      let rem = 0;
      for (let j = nStr.length - 1; j >= 0; j--) {
        prod = nStr2[i] * nStr[j] + rem;
        prod = prod.toString().split('');
        if (prod.length >= 2) {
          rem = parseInt(prod[0]);
        }
        else {
          rem = 0;
        }
        arr[arrIndex - offset] = parseInt(prod[prod.length - 1]);
        arrIndex--;
      }
      if(rem){
        arr[arrIndex - offset] = rem;
      }
      matrix.push(arr);
      offset++;
    }

    let ans = new Array(len);
    ans.fill(0);
    for (let i = len - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][i];
      }
      if(sum >= 10){
        matrix[0][i-1] += Math.floor(sum/10);
      }
      ans[i] = sum % 10;
    }

    return ans.join('').replace(/^0+/, '');
  }
}

module.exports = factorial;