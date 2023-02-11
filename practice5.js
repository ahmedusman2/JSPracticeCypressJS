// Use filter() to create a new array
// that contains only the objects in the following
// array where the age property is greater than 30:

let people = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 25 },
	{ name: "Jim", age: 35 },
];

filteredArrayWithAgePropertyGreaterThan30 = people.filter(
	(people) => people.age > 30
);
console.log(filteredArrayWithAgePropertyGreaterThan30);

// Use map() to create a new array that
// contains only the names of the
// people in the following array:
console.log(people);

let mappedArrayWithNamesOnly = people.map((arr) => arr.name);

console.log(mappedArrayWithNamesOnly);


