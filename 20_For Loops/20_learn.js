// *************** For Loops ***************

// Loops on Array
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// Nested loops
for (let i = 1; i <= 5; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
}

// Break and Continue
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // i ki value 5 hote hi skip kardo
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break; // i ki value 5 hote hi loop tut jaayega
    }
    console.log(i);
}