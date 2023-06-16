// Ask the user for the first number.
let rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

prompt("Enter first number: ");
let num1 = Number(rlsync.question());

while (invalidNumber(num1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = Number(rlsync.question());
}

// Ask the user for the second number.
prompt("Enter second number: ");
let num2 = Number(rlsync.question());

while (invalidNumber(num2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = Number(rlsync.question());
}

// Ask the user for an operation to perform.
let operation = rlsync.question("Enter preferred operation: ");
// Perform the operation on the two numbers.
let result = 0;
switch (operation) {
  case 'add': 
    result = num1 + num2;
    break;
  case 'subtract':
    result = num1 - num2;
    break;
  case 'multiply':
    result = num1 * num2;
    break;
  case 'divide':
    result = num1 / num2;
    break;
}


// Print the result to the terminal.
console.log(result);