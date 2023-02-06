// Function that will print
function greet() {
	console.log("helloo this my first function");
}

greet();

/////////
// This fucntion is just performing a task
// Parameter is at the time of declaration
function printMyName(firstName, lastName) {
	// firstName and lastName are the parameter to the fucntion printMyName
	console.log("My Name is: " + firstName + " " + lastName);
}
// Argument is at the time of calling the function
printMyName("Ahmed", "Usman"); // Ahmed Usman is the arguement in this case
printMyName("Minha", "Usman"); // Minha Usman is the arguement in this case

// 
function square(number) {
	return number * number;
}

let Square = square(2);
console.log(Square);
console.log(square(2));
