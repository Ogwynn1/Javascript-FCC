/*
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

function findLongestWordLength(str) {
    str = str.match(/[\w]+/gi);             // \w in place of [a-zA-Z0-9] // to regex each word into a an array of strings
    let longest = "";                       // Empty string for the longest word
    for (let i = 0; i < str.length; i++) {  // For loop to count each string length
      if (str[i].length > longest.length) { // If string length is longer than last then replace with current
        longest = str[i];                   // Variable is now the longest string as per loop
      }
    }
    return longest.length;                  // Returns the length of the longest string to the function
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Method 2

/*
function findLongestWordLength(str) {
    str = str.split(" ");                                     // Splits the given string, new array of string where a space was declared
    return str.sort((a, b) => b.length - a.length)[0].length; // Sort each string and compare to next with length function
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

// Method 3

/*
function findLongestWordLength(str) {                       
    // Splits the string to an array using split, new array with map containing values, pass new array to math max to find largest value
    return Math.max(...str.split(" ").map(word => word.length));    
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/