'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(input: string[]): string[] {
  let output: string[] = [];
  input.forEach(value => {
    value = value.concat('a');
    output.push(value);
  });
  return output;
}

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;
