/*
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
*/

let x = 7;
let y = 9;
let result = "to come";

if(x === y) { // modified (x = y) Assignment operator to ( x === y ) Strict equality operator
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);