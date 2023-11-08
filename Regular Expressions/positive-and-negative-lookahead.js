/*
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; //1st - any word at least 5 chars 2nd - At least one non integer followed by 2 integers
let result = pwRegex.test(sampleWord);

console.log(result);