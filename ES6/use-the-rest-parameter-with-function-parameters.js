/* BEFORE*/
/* const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total; 
  } */

/* AFTER */
const sum = (...args) => {
    let total = 0;
    for (const num of args) {
      total += num;
    }
    return total;
  }