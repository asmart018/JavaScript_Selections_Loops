console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + ": FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i + ": FIZZ");
  } else if (i % 5 == 0) {
    console.log(i + ": BUZZ");
  } else {
    console.log(i + ": This is neither a FIZZ, nor a BUZZ... Sorry!");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// While loop for exercise 1 //
let j = 1;
while (j <= 100) {
  if (j % 2 == 1) {
    console.log(j);
  }
  j++;
}

// Do while loop for exercise 1 //
j = 1;
do {
  if (j % 2 == 1) {
    console.log(j);
  }
  j++;
} while (j <= 99);

// While loop for exercise 2 //

let i = 1;
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + ": FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i + ": FIZZ");
  } else if (i % 5 == 0) {
    console.log(i + ": BUZZ");
  } else {
    console.log(i + ": This is neither a FIZZ, nor a BUZZ... Sorry!");
  }

  i++;
}

// Do while loop for exercise 2 //

i = 1;
do {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + ": FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i + ": FIZZ");
  } else if (i % 5 == 0) {
    console.log(i + ": BUZZ");
  } else {
    console.log(i + ": This is neither a FIZZ, nor a BUZZ... Sorry!");
  }

  i++;
} while (i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let valueI = 0;

for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log("Found value!");
    valueI = i;
    console.log(valueI);
    break;
  }
  valueI = i;
}
console.log(valueI);
if (valueI != value) {
  console.log("Did not find value");
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i + ": FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i + ": FIZZ");
  } else if (i % buzzDivisor == 0) {
    console.log(i + ": BUZZ");
  } else {
    console.log(i + ": This is neither a FIZZ, nor a BUZZ... Sorry!");
  }
}
