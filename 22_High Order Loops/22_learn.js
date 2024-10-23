// *************** High Order Loops ***************

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
    console.log(`Value of Array ${val}`);
}

for (const key in arr) {
    console.log(key); // Key is Index
    console.log(arr[key]); // Value at index
}

const name = "Priyanshu";
for (const char of name) {
    console.log(`Character is ${char}`);
}

// Maps - Same as Java (Maintains Order of Insertion)
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (const [key, value] of map) {
    console.log(key, "-", value);
}

// Loops on Objects
const myGames = {
    'game1': 'Zombie Catchers',
    'game2': 'BGMI',
    'game3': 'Mini Militia'
}

// Not Iterable like this
// for (const [key, value] of myGames) {
//     console.log(key, "-", value);
// }

// Iterate like this
for (const key in myGames) {
    // console.log(key); // Keys
    // console.log(myGames[key]); // Values
    console.log(`${key} is ${myGames[key]}`);
}

const coding = ["javascript", "java", "cpp", "ruby", "swift", "python"];
// Different For each loop for the array
coding.forEach(element => {
    console.log(element);
});

coding.forEach(function (element) {
    console.log(element);
});

function printMe(num) {
    console.log(num);
}

coding.forEach(printMe); // Just pass the reference, don't execute it inside

// Traverse array of Objects
const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
];

myCoding.forEach(element => {
    console.log(`Language is ${element.langName} and file extension is ${element.langFileName}`);
});