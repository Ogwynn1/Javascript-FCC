/*
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\D* Roosevelt/gi; // Name - 0 or more for middle name - direct surname
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result);