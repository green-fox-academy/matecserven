'use strict';
export {}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
function unique(arr): number[] {
  return arr.sort().filter((value, index, self) => (
    index === self.indexOf(value)
  ));
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
