'use strict';
export { }

function bunny1(n: number): number {
  if (n === 1) {
    return 2;
  }
  return 2 + bunny1(n - 1);
}

console.log(bunny1(6));
