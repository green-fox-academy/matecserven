'use strict';
export { }

function bunny2(n: number): number {
  if (n === 1) {
    return 2;
  }
  if (n % 2 === 1) {
    return 2 + bunny2(n - 1);
  }
  if (n % 2 === 0) {
    return 3 + bunny2(n - 1);
  }
}

console.log(bunny2(6));
