'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(input: number[]): string {
  let out: string = 'Noooooo';
  input.forEach(value => {
    if (value === 7) {
      out = 'Hoorray';
    }
  });
  return out;
}

function containsSeven2(input: number[]): string {
  let out: string = 'Noooooo';
  if (input.some(value => (value === 7))) {
    out = 'Hoorray';
  };
  return out;
}

console.log(containsSeven(numbers));
console.log(containsSeven2(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;
