'use strict';
export { }

function addNumber(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + addNumber(n - 1);
}

console.log(addNumber(5));
