/*
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) { //Included a simple if statement to return true if value is found and false if not
      return true
    }
    return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));