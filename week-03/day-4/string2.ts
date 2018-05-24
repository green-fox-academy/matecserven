'use strict';
export { }

function removeX(input: string): string {
  let out: string = '';
  if (input.length === 0) {
    return out;
  }
  if (input.charAt(0) === 'x') {
    return out.concat('').concat(removeX(input.slice(1)))
  } else {
    return out.concat(input.charAt(0)).concat(removeX(input.slice(1)));
  }
}

console.log(removeX('blablaxxxxblabla'));