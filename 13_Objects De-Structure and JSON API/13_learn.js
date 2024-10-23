// ************* Objects De-Structure & JSON API ************* 

const course = {
    coursename: "JS Hindi",
    price: "999",
    courseInstructor: "undefined",
};

// course.courseInstructor (Multiple time print karne mein dikkat ho rahi thi)

const { courseInstructor: instructor } = course; // Yahi hai Object De-Structuring baar baar use karne se accha ek baar rakhlo aur usko dusra naam bhi de sakte hai
console.log(instructor);

// API can be Objects or Array of Objects

// {
//     "name": "Priyanshu",
//     "course": "JS Hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {}
// ]