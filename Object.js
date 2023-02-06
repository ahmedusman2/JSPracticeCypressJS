let person = {
	firstName: 'Minha',
	age: 4
};

// reading from an object key value
// 1. . dot notation.
console.log(person.age + person.firstName);
// 2. [] brackets
console.log(person['firstName']);
// or
let selection = 'name';
person.firstName= 'Aaaaahmed';

 person.firstName= selection;
console.log(person['selection']);
