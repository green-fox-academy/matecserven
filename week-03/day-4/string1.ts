'use strict';
export { }

function change(input: string): string {
  let out: string = '';
  if (input.length === 0) {
    return out;
  }
  if (input.charAt(0) === 'x') {
    return out.concat('y').concat(change(input.slice(1)));
  } else {
    return out.concat(input.charAt(0)).concat(change(input.slice(1)));
  }
}

console.log(change('BxyXYacxxxXy'));
