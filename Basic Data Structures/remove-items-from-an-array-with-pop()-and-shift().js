/*
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

function popShift(arr) {
    let popped = arr.pop(); // Changed variable to include argument and remove from end
    let shifted = arr.shift(); // Changed variable to include argument and remove front start
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));