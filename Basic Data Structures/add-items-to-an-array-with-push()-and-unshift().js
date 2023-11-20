/*
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, "three"); // Include these numbers to start of array
    arr.push(7, 'VIII', 9); // Include these numbers to the end of the array
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));