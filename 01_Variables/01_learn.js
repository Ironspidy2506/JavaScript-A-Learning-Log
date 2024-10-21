// To log or display something into the console
// console.log("Priyanshu");

// const = Change nai kar sakte
// let, var = Change kar sakte hai

const accountId = 7321;
let accountEmail = "work@gmail.com"; // Yahi use karna hai sikhne ke liye 
var accountPassword = "21bce7321"; // Pehle JS mein block and fucntional scope ka problem hota tha isiliye var use nai karte
accountCity = "Raipur"; //(Not to use but can be done)

let accountState;
// accountId = 21; // Cannot do this
// console.log(accountId);

accountEmail = "work@hotmail.com";
accountPassword = "21bce1237";
accountCity = "Ahmedabad";


// A way to print multiple variables (It will print it in tabular manner)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);