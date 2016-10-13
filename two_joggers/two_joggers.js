function nbrOfLaps(x, y) {
  let lcm = x;
  while(lcm % y !== 0) {
    lcm += x;
  }
  return [lcm / x, lcm / y];
}

module.exports = nbrOfLaps;