function pigIt(str){
  return ans = str.split(' ')
    .map((c) => {
      return c.replace(/([a-z])(.*)/i, '$2$1ay');
    }).join(' ');
}

module.exports = pigIt;