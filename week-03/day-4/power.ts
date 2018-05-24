'use strict';
export { }

function toPower(x: number, n: number): number {
  if (n === 1) {
    return x;
  }
  n--;
  return x * toPower(x, n);
}

console.log(toPower(2, 10));
