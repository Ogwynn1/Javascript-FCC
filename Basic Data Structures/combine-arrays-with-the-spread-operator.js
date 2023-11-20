/*
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
*/

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = [ 'learning', ...fragment, 'is', 'fun']; // Included spread operator (...) at index 1 to complete sentence
    return sentence;
  }
  
  console.log(spreadOut());