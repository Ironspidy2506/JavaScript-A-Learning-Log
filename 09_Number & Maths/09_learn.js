// ************* Numbers **************
// const score = 500;
// const balance = new Number(100);

// console.log(score);
// console.log(balance.toString()); // Casts a Number to String

// console.log(balance.toFixed(1)); // Precision upto 1 decimal place
// console.log(balance.toFixed(2)); // Precision upto 2 decimal places

// const otherNumber = 23.89866;
// console.log(otherNumber.toPrecision(3)); // Precision upto x digits passed

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Prints the Number as String and adds comma according to given format

// console.log(Number.MIN_VALUE); // The min value of a Number
// console.log(Number.MAX_VALUE); // The max value of a Number

// ************* Maths **************
console.log(Math);

console.log(Math.abs(-2)); // Like a Modulo

console.log(Math.round(5.4)); // Round off to Nearest Integer

console.log(Math.ceil(5.1)); // Rounds to the Ceil Integer

console.log(Math.floor(5.9)); // Rounds to the Floor Integer

console.log(Math.min(4, 3, 6, 8)); // Returns the min value

console.log(Math.max(4, 3, 6, 8)); // Returns the max value

console.log(Math.random()); // Returns the random value between 0 and 1

console.log((Math.random() * 10) + 1); // Returns random value between 1 and 10

const min = 10;
const max = 20;
console.log((Math.random() * (max - min + 1)) + min); // Prints Value between the specified min and max range