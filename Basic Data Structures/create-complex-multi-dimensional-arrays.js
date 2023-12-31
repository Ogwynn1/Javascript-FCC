/*
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
*/

// Solution 1

let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested', ["deep",["deeper",["deepest"]]]],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];
  
  console.log(myNestedArray[0][7][1][1])

  // Solution 2

  let myNestedArrayList = [
    // Only change code below this line
    'level 1',                   /* myNestedArray[0]             */
    ['level 2'],	               /* myNestedArray[1][0]          */
    [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
    [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
    [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
    // Only change code above this line
  ];