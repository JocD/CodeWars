var fibonacci = function (n, map) {
  if (map == undefined) {
    map = new Map();
  }

  if (n == 0 || n == 1)
    return n;

  else if(!map.has(n)) {
    map.set(n, fibonacci(n - 1, map) + fibonacci(n - 2, map));
  }

  return map.get(n);
};

console.log(fibonacci(500));