function checkScope() {
    let i = 'function scope'; // Changed var > let
    if (true) {
      let i = 'block scope'; // included let to obtain block level scope
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }