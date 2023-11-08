// function to convert binary from a string using radix
function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  let int = convertToInteger("10110");
  convertToInteger("10011");
  
  console.log(int);