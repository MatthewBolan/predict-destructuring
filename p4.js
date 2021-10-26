const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];

const [,first] = numbers;

const [,,,second] = numbers;

const [,,,,,,,,third] = numbers;

//Predict the output
console.log(first == second);
console.log(first == third);

// Output: false, true

// (first): (2) doesnt equal (5) :(second)                  Output: false

// (first): (2) does equal (2) :(third)                  Output: true

