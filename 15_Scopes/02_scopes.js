// ************* More about Scopes ************* 

// Closure - Child Function Parent Function ki properties access kar pata hai (Basic)
function one() {
    const username = "spidy";

    function two() {
        const website = "youtube";
        console.log(`Hello, ${username}`);
    }

    // console.log(`Welcome to ${website}`);
    two();
}

one();



if (true) {
    const username = "ironspidy";
    if (username === "ironspidy") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // Scope level error
}

// console.log(username); // Scope level error


// +++++++++++++++++++++++++ Interesting Example +++++++++++++++++++++++++

// Concept of Hoisting

console.log(addOne(5)); // Isme error nai aa raha kyunki ye ek function call hai

function addOne(num) {
    return num + 1
}


console.log(addTwo(5)); // But isme error aa raha kyunki jab ye execute hone aaya to code ke upar usko required function nai mila because function was declared in a variable

const addTwo = function (num) {
    return num + 2;
}
