/*
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // one word any length - space - one word any length - space - one word any length
let replaceText = "$3 $2 $1"; // returns strings from regex in reverse order
let result = str.replace(fixRegex, replaceText);

console.log(result);