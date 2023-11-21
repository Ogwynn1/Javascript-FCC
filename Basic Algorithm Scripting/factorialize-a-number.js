/*
function factorialize(num) {
  return num;
}

console.log(factorialize(5));
*/

function factorialize(num) {
    if (num < 0) {
      return "Positive numbers only"; // Returns a string if the integer submitted is a negative
    } 
    else if (num === 0 || num === 1) { 
      return 1; // Function will always return 1 or 0 if these are the numbers given as they wont multiply by anything else
    } 
    else {
      let factor = 1; // initial variable of 1
      for (let i = 2; i <= num; i++) { // loop to count through each number
        factor *= i; // multiply each number in the loop and adding them to the initial variable
      }
      return factor;
    }
  }
  
  console.log(factorialize(5));

// Recursive method

/*
function factorialize(num) {
    if (num < 0) {
        return 1;
    }
    return num * factorialize(num -1)
}
*/

// Tail recursive function

/*
function factorialize(num, factorial = 1) {
    if (num <= 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

console.log(factorialize(5));
*/