'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

//use '*' 5 5 for multiplication
const args = process.argv.splice(2); // Just a helper for you to get started
console.log('Input params are', args);

function calculate(op, a, b) {
  let sum = 0;
  switch (op) {
    case '+': 
      sum = parseInt(a) + parseInt(b);
      break;
    case '-':
      sum = parseInt(a) - parseInt(b);
      break;
    case '*':
      sum = parseInt(a) * parseInt(b);
      break;
    case '/':
      sum = parseInt(a) / parseInt(b);
      break;
    case '%':
      sum = parseInt(a) % parseInt(b);
      break;
    default:
      sum = 'Wrong operation given: ' + op;
  }
  return sum;
}

console.log(calculate(args[0], args[1], args[2]));


//export = calculator;