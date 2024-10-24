// *************** Document Object Model (DOM) ***************

// Incorrect way to get class
document.getElementById('title').class // Wrong

// Correct way to get class
document.getElementById('title').className // Correct

// Getting attributes from an element
document.getElementById('title').getAttribute('id');
document.getElementById('title').getAttribute('class');

// Setting a new class attribute, but it will override any existing class
document.getElementById('title').setAttribute('class', 'test');

// Manipulating styles using the style property
title.style.padding = "15px";
title.style.backgroundColor = 'red';

// Inner HTML includes all HTML tags inside the element
title.innerHTML = 'DOM learning on Chai aur Code';

// Inner Text only includes the visible text inside the element
title.innerText = 'DOM learning on Chai aur Code';

// Text Content includes all text, even hidden text, inside the element
title.textContent = 'DOM learning on Chai aur Code Testing text';

// Query Selector selects the first element that matches the selector
document.querySelector('h2');

// Query Selector All returns all matching elements as a NodeList
document.querySelectorAll('h2');

// Query Selector by ID
document.querySelector('#title');

// Query Selector by class
document.querySelector('.heading');

// NodeList looks like an array but isn't, it has limited properties
const LiList = document.querySelectorAll('li');

// Directly applying styles to NodeList is not possible
LiList.style.color = 'red'; // Not possible

// Accessing individual items in NodeList
LiList[0].style.color = 'red';

// Using forEach to apply styles to each list item
LiList.forEach((l) => {
    l.style.backgroundColor = 'green';
});

// Converting an HTMLCollection to an array using Array.from
const classList = document.getElementsByClassName('list-item');
const myArr = Array.from(classList);