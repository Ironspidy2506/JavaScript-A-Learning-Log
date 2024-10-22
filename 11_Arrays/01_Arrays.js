// ************* Arrays *************

const arr = [1, 2, 3, 4, true, "Priyanshu"]; // Different types of elements bhi ho sakte hai
const newArr = new Array(1, 2, 3, 4);

// Properties :-
// 0-indexed
// Shallow copied arrays
// Access array elements by index // console.log(arr[2]); 

// Array Methods

// Push at the end of the array
newArr.push(5);
console.log(newArr);

// Pop the last element of the array
newArr.pop();
console.log(newArr);

// Push at the beginning of an array
newArr.unshift(0);
console.log(newArr);

// Pop the first element of an array
newArr.shift();
console.log(newArr);

// Check if element is present or not
console.log(newArr.includes(9));

// Check the first occurence index of en element
console.log(newArr.indexOf(9));

// Join every element an return a String
const latestArr = newArr.join(); // Binds Array elements together and returns as a String
console.log(latestArr);
console.log(typeof latestArr);

// Slice and Splice
const myn1 = newArr.slice(1, 3); // Slices array from start index to end - 1 index
console.log(myn1);

const myn2 = newArr.splice(1, 3); // Slices array from start index to end index
console.log(myn2);

// Slice does not manipulate the array but the Splice method manipulates the array by extracting that portion from the original array
console.log(newArr);