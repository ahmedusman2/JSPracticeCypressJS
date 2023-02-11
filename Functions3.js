// difference between var and let in functions

// var scope is at global level if defined at global level and its scope is local if defined inside the function
var greet = "Good morning";
function x() {
	return console.log(greet);
}
x(greet);

var greeet = "GoodNight";
const output = () => console.log(greeet);
console.log(output());


