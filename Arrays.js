// size of the aray and objects of an array are dynamic in JS
let selectedColors = ["red", "green"]; // Array with 2 indexes
selectedColors[2] = "blue"; // Add another index to the existing array.

console.log(selectedColors); // print full array
console.log(selectedColors[2]); // print only 2nd index array

console.log(typeof selectedColors); // what is the type of the array
console.log(selectedColors.length); // access the properties of an array using .

// array declaration differnt syntax
let array = Array(1, 2, 3);
let array2 = new Array(3); // array of length 3
let array3 = new Array(6); // array of length 6
let array4 = [];
let array5 = [1, 2, 3, 4]; //simple and easy

array2 = [1, 2, 3, 4, 5];

// access the value
array5[0] = 1;
console.log(array5);
array5.push(5); // is used to add item to the last of the array
console.log(array5);
array5.pop(); // is used to remove the last item
array5.unshift(1); // add the first index item
console.log(array5);
console.log(array5.indexOf(3));

// if you wnt ot check if there is anything in the array

if (array5.includes(100)) {
	console.log("Yes, your vaule is in the array");
} else {
	console.log("No, your value is not in the array");
}

array5 = [1, 2, 3, 4, 5];
console.log(array5);
slicedArray5 = array5.slice(2, 4);
console.log(slicedArray5);

let sum = 0;
for (let index = 0; index < array5.length; index++) {
	console.log(array5[index]);
	sum += array5[index];
}
console.log(sum);
sum = 0;

let totalSum = array5.reduce((sum, index) => sum + index, 0);
console.log(totalSum);

let product;
product = array5.reduce((product, index) => product * index, 1);
console.log(product);

// reduce() is used to apply function to each element of the array
sum = 0;
let superArray = [1, 2, 3, 4, 5];

console.log(sum = superArray.reduce(function (accumulatedSum, num) {
	return accumulatedSum + num;
}, 0));
console.log(sum);
