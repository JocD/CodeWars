function hamming(n) {
  let res = [1];
  let min = 1;

  for(let i = 1; i <= n; i++){
    min = Math.min(...res);
    res.splice(res.indexOf(min),1);
    if(res.indexOf(2 * min) === -1){res.push(2 * min);}
    if(res.indexOf(3 * min) === -1){res.push(3 * min);}
    if(res.indexOf(5 * min) === -1){res.push(5 * min);}
  }
  return min;
}
module.exports = hamming;