let func = (a, b) => {
  for (let i = 0; i < b; i++) {
    let prod = Math.pow(a, i);
    console.log(`${a} to the ${i}th power: ${prod}. ${prod} % 4: ${prod % 4}`);
  }
};