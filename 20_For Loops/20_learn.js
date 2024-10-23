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

