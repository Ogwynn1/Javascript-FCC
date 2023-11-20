/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line

  // Included three delete lines, to remove oranges, plums and strawberries. Returning only apples, bananas and grapes with their values

  delete foods.oranges; 
  delete foods.plums;
  delete foods.strawberries;

  // Only change code above this line
  
  console.log(foods);