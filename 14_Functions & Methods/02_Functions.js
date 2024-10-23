// ************* More about Functions ************* 

// Normal Function
function calculateCartPrice(num1) {
    return num1;
}

console.log(calculateCartPrice(20));

// Function using Rest Operator
function calculateCartPrice(...num1) { // Rest Operator in Functions
    return num1;
}

console.log(calculateCartPrice(20, 40, 50)); // Returns array of values

// Function using more Parameters and Rest Operator
function calculateStock(val1, val2, ...num1) {
    return num1;
}

console.log(calculateStock(20, 30, 40, 80, 90)); // Returns num values

// Handling Objects using Functions
const user = {
    username: "Spidy",
    balance: 1000
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.balance}`);
}

// Either of both the ways are possible
handleObject(user);

handleObject({
    username: "Sam",
    balance: 5000
});

// Handling Arrays using Functions
const myArray = [200, 500, 600, 100];
function returnSecondValue(myArray) {
    return myArray[1];
}

// Either of both the ways are possible
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([1, 2, 3, 4]));