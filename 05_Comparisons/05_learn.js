// console.log(2 > 1);  // Greater
// console.log(2 >= 1); // Greater Than or Equal to
// console.log(2 < 1);  // Less Than
// console.log(2 <= 1); // Less Than or Equal to
// console.log(2 == 1); // Equals
// console.log(2 != 1); // Not Equals

// Nai karna chaiye 2 different data types ko compare
// console.log("2" > 1);  // true
// console.log("02" > 1); // true

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // Predictable results nai aate

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

/* 
The reason is that an equality check == 
and comparisons > < >= or <= work differently
Comparisons convert null to a number, treating it as 0
That's why null >= 0 is true and null > 0 false
*/

// === vs ==
console.log("2" == 2);
console.log("2" === 2); // Strict Equality

