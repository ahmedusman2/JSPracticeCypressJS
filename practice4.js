//Use map() to create a new array that contains
//the square of each number in the following array: [1, 2, 3, 4, 5].

let numbers = [1, 2, 3, 4];
let squareOfNumbers = numbers.map((num) => num * num);
console.log("square of numbers is= " + squareOfNumbers);
let squareRootOfNumbers = numbers.map((num) => Math.sqrt(num));
console.log("squareRootOfNumbers of numbers is= " + squareRootOfNumbers);

//Use sort() to sort the following array in ascending order: [3, 1, 5, 2, 4].

let newArray = [3, 1, 5, 2, 4];
console.log("unsorted Array=" + newArray);
sortedArrayDESC = newArray.sort((num, num2) => num - num2);
console.log("Sorted Array in desc order=" + sortedArrayDESC);
sortedArrayASC = newArray.sort((num1, num2) => num2 - num1);
console.log("Sorted Array in ASC order=" + sortedArrayASC);

// Use filter() to create a new array
// that contains only the even numbers
// from the following array: [1, 2, 3, 4, 5].

let newArrayTwo = [1, 2, 3, 4, 5];
let evenNumbers = newArrayTwo.filter((num) => num % 2 == 0);
console.log(evenNumbers);

// Use map() and filter() together
// to create a new array that contains
// only the doubled even numbers from the
// following array: [1, 2, 3, 4, 5].

let newArrayThree = [1, 2, 3, 4, 5];
let doubledEvenNumbers = newArrayThree
	.filter((num) => num % 2 == 0)
	.map((num) => num + num);
console.log("doubled even numbers" + doubledEvenNumbers);


//Use sort() to sort the following array of objects by the age property in ascending order:


let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 35 }
];

console.log(people.sort((a,b)=>a.age-b.age));
// let sortedPeopleName = people.name.slice().sort();