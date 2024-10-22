// ************* Some more methods in Arrays *************
const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

// Pushed array into another array
marvel.push(dc);
console.log(marvel);

// Concatenated 2 Arrays and a new Array is returned
const newArr = marvel.concat(dc);
console.log(newArr);

// Using Spread Operator
const myArr = [...marvel, ...dc]; // Elements individual ho jate hai
console.log(myArr);

// Breaks every array in array and then provides a single array with all the elements
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableAnotherArr = anotherArr.flat(Infinity);
console.log(usableAnotherArr);

// Checks whether it is an array or not
console.log((Array.isArray("Priyanshu")));

// Convert the Provided Argument to Array
console.log(Array.from("Priyanshu Sahu"));

console.log(Array.from({ name: "Priyanshu" })); // Key ka array banana hai ya value ka, so returns an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Converts into an array from the passed variables