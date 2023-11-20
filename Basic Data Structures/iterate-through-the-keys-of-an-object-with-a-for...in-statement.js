/*
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
*/

// Found this problem set a bit of a sturggle
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  let total = 0; // Initial variable with 0 value
  for (let user in users) { // Initial variable user to count the users in the user object
    if (allUsers[user].online === true) { 
      total++; // In each iteration check, if the user has the online key value set to true to add 1 to the total
    }
  }
  return total;
  
/*
Alternative solution without using a for...if statement

  return Object.values(allUsers).filter(user => user.online).length;
  
*/

  // Only change code above this line
}

console.log(countOnline(users));