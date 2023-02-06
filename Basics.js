const flag = false;

if (flag) {
	// or you can also do (!flag)
	console.log("condition is satisfied");
} else {
	console.log("condition is not satisfied");
}

// while loop, will go in the loop block if the while condition is true. else wil not
let i = 0;
while (i < 10) {
	//
	i++;
	console.log(i);
}

let x = 0;
do {
	// do while loop will atleast run the while block once and even if the while condition is false
	x++;
	console.log(x);
} while (x > 10);
{

	console.log("im inside while");
}

for (index = 0; index <= 10; index++) {
	console.log(index);
}


let result = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0 || i % 10 === 0) {
    result.push(i);
  }
}
console.log(result);