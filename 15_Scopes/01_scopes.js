// ************* Scopes ************* 

/// Block ke andar jo bhi chiz likhenge wo within block rahegi and Block ke bahar wali chiz global scope rahegi 

// let a = 10;
// const b = 20;
// var c = 30;

// if (true) {
//     a = 100; // Value change hogayi
//     c = 300; // Value change hogayi
// }

// console.log(a);
// console.log(b);
// console.log(c);


if (true) {
    // let a = 10;
    // const b = 20;
    var c = 30;
    d = 40;
}

// console.log(a);
// console.log(b);
console.log(c); // var keyword makes it global scope
console.log(d); // no keyword makes it global scope

// (Windows browser console and Node dono ka global scope alag hota hai)