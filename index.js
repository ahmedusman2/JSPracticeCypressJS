// comment here
// This is my first JScript Code
// Keep JS code at the end of the body

console.log("My First JS Word");
console.log("Running from JS file");

// Variables pointers
// 1. let is better to use instead of var
// 2. keep meaningful names and descriptive
// 3. cannot start with number, like 1number
// 4. they cannot contain - or space
// 5. Variable names are case sensitive
// 6. Declare each variable in a separate line

let firstName = "Ahmed";
let secondName = "Usman";
console.log(firstName + " " + secondName);

//-----------------//-----------------//-----------------

// constants
// value of constants are not changed and cannot be reassigned

const interestRate = 12.23;
let a = 12;
let sum;

// interestRate = interestRate + a;
console.log(interestRate); // error cannot change the value of const will show

//-----------------//-----------------//-----------------

// Data Types:
// 1. Permitive data Tyepes:
//  ---1.1 String
//  ---1.2 number
//  ---1.3 null
//  ---1.4 booleans
//  ---1.5 undefined

let name = "Ahmed"; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let fName = null;
let lName = undefined;
let selectedColor = null;
//-----------------//-----------------//-----------------

// Data Types:
// 2. Reference data Tyepes:
//  ---2.1 objects
//  ---2.2 arrays
//  ---2.3 functions

// person object

let person = {
	firstName: "Minha",
	lastName: "Usman",
	age: 4,
};
console.log(typeof person);
console.log(person.firstName + " " + person.lastName + " Age:" + person.age);

// reading from an object key value
// 1. . dot notation.
console.log(person.age);
// 2. [] brackets
console.log(person[lastName]);
// or
let selection = person.firstName;
console.log(person[selection]);

//-----------------//-----------------//-----------------
