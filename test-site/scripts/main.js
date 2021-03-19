/*      *********************JAVASCRIPT BASICS***************************

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';


// 1. IF statement example in JS Basic******************************************



/* 

let iceCream = 'Chocolate';
if (iceCream === 'Chocolate') {
    alert('Yay, I love chocolate iceCream!');
} else {
    alert('Awww, But chocolate icecream is my favorite...');
};

*/



// 2. Function example in JS Basic**********************************************




/* these functionalities come with out browser

let myVariable = document.querySelector('h1');
alert('hello');



// We can create our own function too in JS

function multiply(num1, num2) {
   let result = num1 + num2;
   return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
*/

// 3. Events example JS Basic

/*
document.querySelector('html').onclick = function() {};

let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    
};
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-logo-2017.jpg') {
        myImage.setAttribute('src', 'images/firefox-logo.png' );
    } else {
        myImage.setAttribute('src', 'images/firefox-logo-2017.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter a name! ');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
};

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is coll, ' + storedName;
};

myButton.onclick = function() {
    setUserName();
}




  



