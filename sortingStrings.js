// Sorting Strings

// for sorting string we use sort()
// note is the sorting is based on case sensitive
// so you upper case them first and then sort
const names = ["fahad", "Iqtidar", "Faisal", "Wasib"];
assendingOrderSortedCapatilizedNames = names
	.map((word) => word.toUpperCase())
	.sort();
// assending
console.log(assendingOrderSortedCapatilizedNames);
// decending
console.log(assendingOrderSortedCapatilizedNames.reverse());

// sorting numbers
// you can't use sorting directly you will have to apply bubble sort

const stringOfNumbers = [100, 2.2, 3, -1];
assendingNumber = stringOfNumbers.sort((a, b) => a - b);
console.log(assendingNumber);
descendingNumber = stringOfNumbers.sort((a, b) => b - a);
console.log(descendingNumber);
