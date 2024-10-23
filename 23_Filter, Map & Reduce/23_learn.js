// *************** Filter, Map & Reduce ***************
const coding = ["js", "java", "ruby", "python", "swift"];

const values = coding.forEach(item => {
    // console.log(item);
    // return item;
});

console.log(values); // Undefined aa raha matlab for each kuch bhi return nai karta

// Filter in JavaScript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter((num) => { // Filter mein values return hoti hai
    return num > 4;
});

console.log(newNums);

// Map in JavaScript
const add10Nums = myNums.map((element) => element + 10);
console.log(add10Nums);

// Chaining of methods like maps, filters
const newNumbers = myNums.map((element) => element * 10).map((element) => element + 1).filter((element) => element > 40);
console.log(newNumbers);


// Reduce is JavaScript

// For Arrays
const myNumbers = [1, 2, 3];
const myTotal = myNumbers.reduce(function (acc, currval) {
    console.log(`Acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0);

console.log(myTotal);

// For Objects
const myCourses = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "AI Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 3999
    },
    {
        itemName: "DevOps Course",
        price: 9999
    }
];

const totalPrice = myCourses.reduce((acc, item) => {
    return acc + item.price
}, 0);

console.log(totalPrice);