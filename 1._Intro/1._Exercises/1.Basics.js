// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

//console.log("My first name is %s and my last name is %s", firstName, lastName)

const introduction = "My first name is " + firstName + " and my last name is " + lastName;

// console.log(firstName + " " + lastName);
// console.log(firstName, lastName);

// console.log(`My first name is ${firstName} and my last name is ${lastName}`);

const stringTypeOne = "This is 'weird'";
const stringTypeTwo = 'This is "weird"';
const stringTypeThree = `"This" is 'weird'"'""'"`;




// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2019";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

// console.log(parseInt(year) + number);

const currentYear = Number(year) + number;

// console.log(currentYear);

const testParsing = "123abc";

console.log(Number(testParsing));

console.log("" + 123);



// --------------------------------------
