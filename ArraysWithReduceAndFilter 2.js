// The Array.reduce() method in JavaScript is used to iterate over an array
// and reduce its elements to a single value by applying a given function.
// The function takes two arguments: an accumulator and the current value being processed.
// The accumulator is updated in each iteration with the result of the function,
// and the final result is the value returned by the reduce() method.

/*
// write a code that can sum first 10 numbers

let output = [];
let sum = 0;
for (let i = 1; i <= 10; i++) {
	sum += i;
}
// console.log(i);
output = sum;
console.log(output);

sum = 0;
let numbers = [1, 2, 3, 4];

sum = numbers.reduce(function (accumulatedValue, Currentvalue) {
	return (accumulatedValue += Currentvalue);
}, 0);

console.log(sum);

////
*/

/* let numbers = [1, 2, 3, 4];

let sum = numbers.reduce(function (accumulatedSum, currrentValue) {
	return (accumulatedSum += currrentValue);
},0);
console.log(sum);
 
 */

// write a prog to add marks of all subjects
/* 
let marksObtained = [50, 100, 55, 65];

let sumOfMarks = marksObtained.reduce(function (accumulatedSum, currentValue) {
	return accumulatedSum+currentValue;
},0);

console.log(sumOfMarks); */

// write a code which can return you even number from a list on numbers

// let numbers = [1, 2, 3, 4];
/* let evenNumber = []
for (let i = 0; i <= numbers.length; i++) {
	if (numbers[i] % 2 == 0) {
		evenNumber.push(numbers[i]);
	}
}
console.log(evenNumber);
let newFilterEvenNumbers = numbers.filter(numbers=>numbers%2==0) 
console.log(newFilterEvenNumbers);

 */
// when to use reduce() and filter()
// reduce() is used to iterate and so some accumulted sum like of thing
// filter() is used to iterate and so some accumulted sum like of thing

// find the sum of number of any array
// let sum= 0 ;
// console.log(sum= numbers.reduce((accSum,currentValue)=>accSum+currentValue,0));

// Using Array.reduce(), concatenate all strings in an array:
//  reduce is used to reduce the values of an array to a single value after iteraqtion

// let array = ["My ", "Name ", "is ", "Ahmed"];
// concatedStringName = array.reduce(
// 	(concatenatedString, currentValue) => concatenatedString + currentValue,
// 	""
// );
// console.log(concatedStringName);

// // Using Array.reduce(), find the sum of all numbers in an array:
// let Numbers = [1, 2, 3, 4];
// console.log(
// 	(sum = Numbers.reduce(
// 		(accumulatedSum, currentValue) => accumulatedSum + currentValue,
// 		1
// 	))
// );

// Using Array.reduce(), concatenate all strings in an array:

// stringSet = ['my','name','is','ahmed'];
// sentence = stringSet.reduce((concatenatedSting,currentValue)=>concatenatedSting+''+currentValue,'')

// console.log(sentence);
// // Using Array.filter(), find all even numbers in an array:

 let NumberSet = [1,2,3,4,5]
 console.log( EvenNumbers= NumberSet.filter((NumberSet)=>NumberSet%2==0));
// console.log( oddNumbers= NumberSet.filter((NumberSet)=>NumberSet%2!==0));

// reduce is used to reduce an array to a single value. used in accumulated operations.

// let numbers = [1, 0, 10, 1];
// let total = numbers.reduce(
// 	(accumulatedValue, currentValue) => accumulatedValue + currentValue,
// 	0
// );
// console.log(total);

// filter is used to filter an array based on any condtion and return another array

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 'A','F'];
// evenNumber = numbers.filter((numbers) => numbers % 2 == 0);
// console.log(evenNumber);

// let stringSet = ['Mr','Ahmed','usman']
//  fullName= stringSet.reduce((concatenatedSting,currentValue)=>concatenatedSting+' '+currentValue,'');
// console.log(fullName);
// //
//  sentence = stringSet.reduce((concatenatedSting,currentValue)=>concatenatedSting+' '+currentValue,'')

//  console.log(sentence);

//

// write code to take product of all numbers
// let numbers= [20,20,20];
// let productOfNumbers = numbers.reduce((accProd,currentValue)=>accProd*currentValue,1);
// console.log(productOfNumbers);

// write a code for numbers divisible by 3
// let numbers= [1,2,3,90]
// let numbersDivisibleByThree= numbers.filter((numbers)=>numbers%3==0);
// console.log(numbersDivisibleByThree);

// Use Array.reduce() and Array.filter() together to find the average of all positive numbers in an array.

/* numbers = [1, -2, 3, -1, -100];

positiveNumbers = numbers.filter((numbers) => numbers > 0);
console.log(positiveNumbers);
averageOfPoitiveNumbers = positiveNumbers.reduce(
	(accSum, cuurentValue) => accSum + cuurentValue / positiveNumbers.length,
	0
);
console.log(averageOfPoitiveNumbers);
 */

// Using Array.filter(), find all objects in an array that have a certain property value:

const jsonObject = [
	{ name: 'ahmed', age: 38,}
]
;

let findAhmed = jsonObject.filter((name) => name.name == "ahmed");
console.log(findAhmed);

const people = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 25 },
	{ name: "Jim", age: 35 },
];
const youngPeople = people.filter((person) => person.age < 30);
console.log(youngPeople);
// Output: [{ name: 'Jane', age: 25 }]
