'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(input: number[]): boolean {
  return (-1 <
    (input.indexOf(4) && input.indexOf(8) &&
      input.indexOf(12) && input.indexOf(16)));
}

console.log(checkNums(listOfNumbers));

export = checkNums;
