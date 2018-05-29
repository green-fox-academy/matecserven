'use strict';

let firstNumber: number = 1;

while (firstNumber <= 100) {
  if (firstNumber % 3 === 0 && firstNumber % 5 === 0) {
    console.log('FizzBuzz');
  } else if (firstNumber % 3 === 0) {
    console.log('Fizz');
  } else if (firstNumber % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(firstNumber);
  }
  firstNumber++;
}
