// ************* Objects *************

// Can be declared using Literals, Constructor (Singleton)

// Object Literals
const mySym = "key1";

const jsUser = {
    name: "Priyanshu",
    "full name": "Priyanshu Sahu",
    age: 20,
    [mySym]: "mykey1",
    location: "Vij",
    email: "priyanshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Can be accessed using 2 methods
console.log(jsUser.name);
console.log(jsUser['email']);
console.log(jsUser["full name"]);


// console.log(jsUser.mySym); // Returns a String not a Symbol
console.log(jsUser[mySym]); // Correct way to use symbol

jsUser.email = "priyanshu@rediff.com"; // Change user email
Object.freeze(jsUser); // Object is freezed so values cannot be changed after freezing
jsUser.email = "priyanshu@inkmail.com"; // Changes does not reflect
console.log(jsUser);

jsUser.greeting









// Constructor
// Object.create