// Denoted using Single and Double quotes

const name = "Priyanshu"; // Declaration
const surname = new String("Sahu"); // Using new Keyword
const address = "bhoot-bangla-area";
const repoCount = 15;

// console.log(name + repoCount); // Concat

console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`); // Industrial method

console.log(surname.__proto__); // Prototype

console.log(surname.length); // Length of the String

console.log(surname.toUpperCase()); // Call by reference does not change the original value

console.log(surname.charAt(2)); // Prints character at the index

console.log(surname.indexOf('a')); // Prints index of first occurence of the character

const newStr = surname.substring(0, 2);
console.log(newStr); // Takes char from start to end - 1 (Last index always exclusive)

const anotherStr = surname.slice(0, 3); // Slices string from start index to end index
console.log(anotherStr);

const newString = "    ilovecoding   ";
console.log(newString.trim()); // Trims the spaces from both the sides

const url = "https://learncoding.com/codingisfun%20yayyy";
console.log(url.replace("coding", "programming")); // Replaces the value of first occurence

console.log(url.includes("fun")); // Checks whether the string is present in the Parent string or not

const words = address.split('-'); // Splits the String with a separator
console.log(words);