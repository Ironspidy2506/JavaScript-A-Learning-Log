// ************* Functions ************* 

// Creating a function
function hello() {
    console.log("Hello world!!");
}

// Calling a Function
// hello; // Reference
hello()   // Execute

function add(number1, number2) { // a and b are Parameters
    return number1 + number2; // Returns the result
}

console.log("Result:", add(7, 9)); // When function is called and some numbers are passed, those numbers are Arguments

function loginUserMessage(username = "Sam") { // Default value set as "Sam"
    return `Hello, ${username} you are logged in!`;
}

console.log(loginUserMessage("Joker"));
console.log(loginUserMessage()); // Returns undefined as username