// *************** Date & Time ***************

// Date is calulated in milliseconds from January 1, 1970

let myDate = new Date();

console.log(typeof myDate); // Returns Object (Date is an object)

console.log(myDate);

console.log(myDate.toString()); // Returns Date in String

console.log(myDate.toDateString()); // Returns Day and Date (Day Month Date Year)

console.log(myDate.toISOString()); // Returns the Default format of ISO Standards

console.log(myDate.toLocaleString()); //  Returns the Date (MM/DD/YYYY) and Exact time (HH:MM:SS AM/PM)

console.log(myDate.toLocaleDateString()); // Returns the Date (MM/DD/YYYY)

console.log(myDate.toLocaleTimeString()); // Returns the Exact time (HH:MM:SS AM/PM)

// let myCreatedDate = new Date(2024, 0, 23); // Months are 0-indexed
// let myCreatedDate = new Date(2024, 0, 23, 5, 10); 
// let myCreatedDate = new Date("2023-01-15"); 
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Returns milliseconds
console.log(myCreatedDate.getTime()); // Take the date according to user and returns milliseconds from that date

console.log(Math.floor(myTimeStamp / 1000)); // Converted to seconds

let newDate = new Date();
console.log(newDate.getMonth()); // There are many methods which can be used by using . operator

console.log(newDate.toLocaleString('default', {
    // weekday : "long"
    // weekday : "short"
    weekday: "narrow" // Can define how user wants the day
}));