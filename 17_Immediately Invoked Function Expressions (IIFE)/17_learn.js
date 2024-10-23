// ************* Immediately Invoked Function Expressions (IIFE) ************* 

// Turant Execute hone wale function
// Global scope ke pollution se problems hoti hai kayi baar usi problems se bachne ke liye, hum IIFE ka use karte hai

// Named IIFE

(function chai() {
    console.log(`DB-CONNECTED`);
})(); // Semicolon must taaki execution ke baad, dusre function ka execution na ruke

(function aurcode() {
    console.log(`DB-CONNECTED TWO`);
})();

((name) => {
    console.log(`DB-CONNECTED THREE`);
})('hitesh');

// No Named IIFE

(() => {
    console.log(`DB-CONNECTED FOUR`);
})('hitesh');