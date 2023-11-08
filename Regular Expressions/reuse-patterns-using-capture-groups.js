/*
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Starts with any number of integers - repeats the first found group - repeats the first found ground as and end
let result = reRegex.test(repeatNum);

console.log(result);