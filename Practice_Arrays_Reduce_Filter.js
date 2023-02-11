// write a program to print numbers 1 to 10

//let numbers = [1, 2, 3, 4, 5];
/* 
console.log(numbers.forEach((num)=>num,0,numbers))
 */

let numbers = [];
for (i = 1; i <= 10; i++) {
	numbers.push(i);
}
console.log(numbers);

/* let x = 0;
do {
	x++;
	console.log(x);
} while (x < 10);
 */
// print sum of numbers from 1 to 10

let sum = numbers.reduce((accSum, currentValue) => accSum + currentValue, 0);
console.log("sum of first 1o integers= " + sum);
// print product of numbers from 1 to 10

let product = numbers.reduce(
	(proAcc, currentValue) => proAcc * currentValue,
	1
);
console.log("product of first 1o integers= " + product);

// print even number
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log("list of even numbers from first 1o integers= " + evenNumbers);

// print odd numbers
let oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log("list of odd numbers from first 1o integers= " + oddNumbers);

// concatenate a string
let string = ["my", "name", "is", "ahmed", "usman"];
let concatenatedString = string.reduce(
	(concatenatedString, currValue) => concatenatedString + " " + currValue
);
console.log(concatenatedString);
let UpperCase = concatenatedString.toUpperCase();
console.log("Upper case" + UpperCase);

// reverse numbers
let reverseNumbers = numbers.slice().reverse();
console.log("The numbers are reversed as " + reverseNumbers);

// reverse string
console.log(string.reverse());
console.log(typeof UpperCase);

let arrayy = ["apple", "banana", "cherry"];

arrayy.reverse().sort();
console.log(arrayy);

////

// sort an objects of strings
let fruits = ['apple', 'banana', 'cherry'];
console.log('type is='+typeof(fruits)+`\n`+'and fruits are= '+fruits);

console.log(fruits.map((fruits)=>fruits.toUpperCase())


////
// Use map() to create a new array that contains 
// the square of each number in the following array: [1, 2, 3, 4, 5].






