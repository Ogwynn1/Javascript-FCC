/*
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4); // Included the parameters 1 and 4 to remove "4, 5, 1, 7"
// Only change code above this line
console.log(arr);

// Included this extra function for clarification
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; 
}
console.log(sum); 

//Included the following as an an arrow function for the above
/*
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
*/