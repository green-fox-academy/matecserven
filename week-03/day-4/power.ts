'use strict';
export { }

function toPower(toBePowered: number, n: number): number {
  if (n === 1) {
    return toBePowered;
  }
  n--;
  return toBePowered * toPower(toBePowered, n);
}

console.log(toPower(2, 10));
