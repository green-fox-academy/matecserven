'use strict';
export { }

function change(input: string, index: number = 0): string {
  let out: string = '';
  if (index === input.length) {
    return out;
  }
  if (input.charAt(index) === 'x') {
    return out.concat('y').concat(change(input, index + 1));
  } else {
    return out.concat(input.charAt(index)).concat(change(input, index + 1));
  }
}

console.log(change('BxyXYacxxxXy'));
