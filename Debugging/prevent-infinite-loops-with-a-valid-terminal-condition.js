/*
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/

function myFunc() {
    for (let i = 1; i <= 4; i += 2) { // Changed operator from i != 4 to i <= 4 to prevent infinite loop.
      console.log("Still going!");
    }
  }