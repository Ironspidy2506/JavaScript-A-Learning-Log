// ************* Arrow Functions & This Keyword ************* 

// This keyword current context(uske andar ke values) ko refer karta hai
const user = {
    username: "Spidy",
    price: 10000,

    welcomeMessage: function () {
        console.log(`Hey ${this.username}, Welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

// Browser pe global object hai - Window Object
// Node pe global object hai - Empty Object
// console.log(this); // Browser pe bahut saare context hai par Node mein empty object return hota hai


// function chai() {
//     let username = "spidy";
//     console.log(this.username); // Functions ke andar 'this' use nai ho paa raha
// }

// chai();


// Arrow functions

const chai = () => {
    // let username = "spidy";
    console.log(this);
};

chai();

const addTwo = (num1, num2) => num1 + num2; // No need to use return keyword
const addThree = (num1, num2, num3) => (num1 + num2 + num3); // No need to use return keyword

console.log(addTwo(2, 9));
console.log(addThree(1, 2, 3));

const userDetails = () => ({username : "Priyanshu"}); // Bina Curly braces ke function ek object ko return nai kar sakta
console.log(userDetails());