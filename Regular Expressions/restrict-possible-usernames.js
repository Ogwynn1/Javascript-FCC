/*
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{1}\d{2,}$|^[a-z]{2,}\d*$/i; //searches: start - any letter * 1 - end 2 integers or more | start - any letter * 2 - end integer 0 or more
let result = userCheck.test(username);

console.log(result);