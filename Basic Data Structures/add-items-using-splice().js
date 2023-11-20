/*
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

function htmlColorNames(arr) {
    // Only change code below this line
    let startIndex = 0; // Included a variable for splice start
    let amountToDelete = 2; // Included a variable for splice count
    arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond'); // Splice function including both variables and replacement strings
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));