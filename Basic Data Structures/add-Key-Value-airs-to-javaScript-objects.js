/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line

  foods.bananas = 13; // Add object with dot notation and value
  foods["grapes"] = 35; // Add object brackets (used for strings with spaces) and value
  
  let strawbs = "strawberries"; // Declare variable 
  foods[strawbs] = 27; // Add new variable as declared with value

  // Only change code above this line
  
  console.log(foods);