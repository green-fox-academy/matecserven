'use strict';
export { }

function seperate(input: string): string {
  let out: string = '';
  if (input.length === 0) {
    return out;
  }
  if (input.charAt(0) !== ' ' && input.charAt(1) !== ' ') {
    return out.concat(`${input.charAt(0)} `).concat(seperate(input.slice(1)));
  } else {
    return out.concat(input.charAt(0)).concat(seperate(input.slice(1)));
  }
}

console.log(seperate('Bxy XYacxxx  Xy'));
