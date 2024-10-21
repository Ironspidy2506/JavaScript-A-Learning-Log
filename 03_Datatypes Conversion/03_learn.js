// let score = 33; //number
// let score = "33"; // string
// let score = "33abc"; // string
// let score = null; // null
// let score = undefined; // undefined
let score = true; // boolean

console.log(typeof score);
let valueInNumber = Number(score); // Conversion to Number
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn); // Conversion to Boolean
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let num = 55;
let stringNum = String(num); // Conversion to String
console.log(typeof stringNum);
console.log(stringNum);

/* Some Conversions
"33" => 33
"33abc" => NaN
true => 1; false => 0;
null => 0
undefined => NaN
1 => true; 0 => false;
"" => false; "value" => true
*/