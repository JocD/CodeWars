"use strict";
function dirReduc(arr) {
  const NORTH = 'NORTH';
  const SOUTH = 'SOUTH';
  const EAST = 'EAST';
  const WEST = 'WEST';
  let hasChanged = null;

  let isOpposite = (a, b) => {
    let ret = false;
    switch (a) {
      case NORTH:
        ret = b === SOUTH;
        break;
      case SOUTH:
        ret = b === NORTH;
        break;
      case EAST:
        ret = b === WEST;
        break;
      case WEST:
        ret = b === EAST;
        break;
    }
    return ret;
  };

  do {
    if (arr.length <= 1) {
      break;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (isOpposite(arr[i], arr[i + 1])) {
        arr.splice(i, 2);
        hasChanged = true;
      }

      else {
        hasChanged = false;
      }
    }
  } while (hasChanged);

  return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(dirReduc(['EAST','EAST','WEST','NORTH','WEST','EAST','EAST','SOUTH','NORTH','WEST']));