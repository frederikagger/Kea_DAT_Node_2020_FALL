// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// const result = Number(numberOne) + Number(numberTwo);
//
// console.log(result);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);

console.log(result);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const average = ((one + two + three)/3).toFixed(5);

console.log(average);


// Show in the console the avg. with 5 decimals





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const giveMeTheC = letters[2];

console.log(giveMeTheC);

console.log(letters.charAt(2));

console.log(letters.substr(2, 1));

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("j", "J"));

// --------------------------------------



