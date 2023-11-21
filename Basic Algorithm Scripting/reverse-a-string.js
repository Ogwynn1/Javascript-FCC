/*
function reverseString(str) {
  return str;
}

reverseString("hello");
*/

// Method 1 easiest method I could do

function reverseString(str) {
    return str.split('').reverse().join(''); // Split the input into a new string, reverse the order of items and join together to make a new string
  }
  
  console.log(reverseString("hello"));

// Method 2

// Same as method 1 but uses spread operator in place of the split operator

/*
function reverseString(str) {
    return str = [...str].reverse().join('');
  }
  
  console.log(reverseString("hello"));
*/

// Method 3

// Again like method 1 & 2 but uses the Array.from function to return the string into an array of single items

/*
function reverseString(str) {
    return str = Array.from(str).reverse().join('');
  }
  
  console.log(reverseString("hello"));
*/

// Method 4

// Split the input into chars, reduce the chars using accumulator and add to new string which would be in reverse order
  
/*
function reverseString(str) {
  str = str.split("").reduce((acc, char) => char + acc, ""); 
  return str
}

console.log(reverseString("hello"));
*/

// Method 5

// Spread operator to split string into individual items, reduce function to count through the string and concat each new item

/*
function reverseString(str) {
  return [...str].reduce((acc, char) => char.concat(acc));
}

console.log(reverseString("hello"));
*/

// Method 6 

// This method uses a for loop counting backwards and retuning the value to the function

/*
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("hello"));
*/