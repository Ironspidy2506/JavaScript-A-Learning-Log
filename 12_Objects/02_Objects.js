// ************* Objects ************* 

// Constructor
// Object.create

// const tinderUser = {}; // Non-Singleton Object
const tinderUser = new Object(); // Singleton Object

tinderUser.id = "21bce7321";
tinderUser.name = "Priyanshu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Nested Objects
const regularUser = {
    email: "priyanshu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Priyanshu",
            lastname: "Sahu",
        }
    }
}

// Access Nested Objects
console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); // Checks if full name is present or not and then proceeds to check further (Industry Standards)


// Combining Objects
const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {
    3: "a",
    4: "b",
};

// const obj3 = { obj1, obj2 }; // Returns Objects inside an object (Does not returns the combination of both the objects)

// const obj3 = Object.assign({}, obj1, obj2); // Combines both the Objects and returns key-value pairs (Saare objects milke uss empty parenthesis mein chale jaayengi as a target object)

// const obj3 = {...obj1, ...obj2}; // Using Spread Operator Again

// console.log(obj3);


// Object inside an Array
const users = [
    {
        id: 1,
        email: "1@gmail.com",
    }
];

// Access the object inside the array
console.log(users[0].email);

console.log(Object.keys(tinderUser));   // Prints all the keys
console.log(Object.values(tinderUser)); // Prints all the values
console.log(Object.entries(tinderUser));// Prints all key value pairs

console.log(tinderUser.hasOwnProperty('name')); // Checks if there is a property of name in Object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Checks if there is a property of isLoggedIn in Object