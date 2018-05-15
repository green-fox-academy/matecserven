'use strict';
export { }
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
function reverse(input: string): string {
  let correct: string = '';
  for (let i: number = 0; i <= input.length; i++) {
    correct += input.charAt(input.length - i);
  };
  return correct;
}

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
console.log(reverse(reversed));

export = reverse;
