// *************** While Loops ***************

// Normal Loops
let i = 10;
while (i > 0) {
    console.log(`Current value is ${i}`);
    i--;
}

// Loops for Array
const arr = [1, 2, 3, 4, 5];
let idx = 0;
while (idx < arr.length) {
    console.log(`Value is ${arr[idx]}`);
    idx++;
}

// Do - While Loops

// Do wala statement pehle chalega hi phir condition check ki jaayegi
let score = 1;
do {
    console.log(`Score value is ${score}`);
    score++;
} while (score <= 10);