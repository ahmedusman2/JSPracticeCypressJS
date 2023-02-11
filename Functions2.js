function add(a, b) {
	return a + b;
}

let sum = add(1, 2);
console.log(sum);

// anonynous function

sum = (a, b) => a + b;
console.log(sum(2, 3));

// write a function that takes strings and reverse them

let arr = [1, 2, 3];
let reverseString = function reverseMyString (array) {
	return array.slice().reverse();
};
console.log(reverseString(arr));


let reverseMyStringg = (array)=>array.slice().reverse(); 
console.log(reverseMyStringg(arr));

