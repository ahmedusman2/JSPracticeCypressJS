// Print me numbers which are multiple of 2 and 5 from the first 10 integers

let result = [];
for (let i = 1; i <= 50; i++) {
	if (i % 2 == 0 && i % 5 == 0) {
		result.push(i);
	}
}
console.log(result);

// Print me numbers which are multiple of 2 and 5 from the first 10 integers but only prij
// Write a JavaScript program to print the numbers from 1 to 10.
// Write a JavaScript program to print all even numbers from 0 to 20.
// Write a JavaScript program to sum all the numbers from 1 to 100.
// Write a JavaScript program to find the product of all the numbers from 1 to 10.
// Write a JavaScript program to find the average of a set of numbers.
// Write a JavaScript program to print the first 10 Fibonacci numbers.
// Write a JavaScript program to print the numbers from 10 to 1.
// Write a JavaScript program to find the factorial of a given number.
// Write a JavaScript program to find the largest number in an array of numbers.
// Write a JavaScript program to find the sum of even numbers in an array of numbers.

// [1] Write a JavaScript program to print the numbers from 1 to 10.
let output = [];
for (let index = 1; index <= 10; index++) {
	output.push(index);
}
console.log(output);
index = null;
result = null;
console.log("end of Question 1");

// [2] Write a JavaScript program to print all even numbers from 0 to 20.

result = [];
for (index = 0; index <= 20; index++) {
	if (index % 2 == 0) {
		result.push(index);
	}
}
console.log(result);
result = null;
console.log("end of Question 2");

// [3] Write a JavaScript program to sum all the numbers from 1 to 100.

result = [];
let sum = 0;
for (index = 0; index <= 100; index++) {
	sum = sum + index;
}
result.push(sum);
console.log((result = sum));
console.log("end of Question 3");
result = null;
index = null;

// [4] Write a JavaScript program to find the product of all the numbers from 1 to 10.
//  1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800

result = [];
let product = 1;
for (index = 1; index <= 10; index++) {
	product *= index;
}
result.push(product);
console.log((result = product));
index = null;

// Write a JavaScript program to find the average of a set of numbers.

function findAverage(numbers) {
	let sum = 0;
	for (index = 0; index <= numbers.length; index++) {
		sum += numbers[index];
	}
	let average = sum / numbers.length;
}

let numbers = [1, 2, 3];
result = findAverage(numbers);
console.log(result);

let summ = 0;
let sett = [1, 2, 3];
for (let indexx = 0; indexx < sett.length; indexx++) {
	summ += sett[indexx];
}
let average = summ / sett.length;
console.log("here is average: " + average);

function findAverageOfSet(settt) {
	let summm = 0;

	for (let indexxx = 0; indexxx < settt.length; indexxx++) {
		summm += settt[indexxx];
	}
	let averagee = summm / settt.length;
	return averagee;
}
let settt = [1, 2, 3];
let reverseArray= settt.reverse();

console.log(findAverageOfSet(settt));

console.log(reverseArray);

// Write a JavaScript program to print the first 10 Fibonacci numbers.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.



