console.log("Hello This is Ahmed");

// how to run a js file
// go to terminal and run : node practice.js
// ---------------------------------------------------------------

// user // coments and
//
/* 
text 
*/

// variabeles are loosly coupled so no need to write data type while defining variables in JS

var a = 1; //number
var aa = 1; //number

var b = "Hello"; // string
var c = `hello`; // string
var array = [1, 2, "Hello"]; // object
let check = true; // boolean

// you can also use
// let and const for ES 6
// ---------------------------------------------------------------

// print a variable
console.log(a, b, c, array);

// ---------------------------------------------------------------

// to know whta is the data typeof the variable, we can use "typeof()"
console.log(typeof a);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof array);
console.log(typeof check);
// ---------------------------------------------------------------

// difference between var, let and const
// you cannot redeclare a variable with let. redeclaring is not allowed in let but re assignmnet is allowed

// let c = a + aa; // you will get an error : SyntaxError: Identifier 'c' has already been declared 
var c = a + aa;
console.log(c);

// Not or negation operator
// !

let booleanGuy = true;
console.log(!booleanGuy);

