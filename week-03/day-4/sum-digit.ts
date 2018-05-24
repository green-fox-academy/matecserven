'use strict';
export { }

function sumDigit(n: number): number {
  if (n < 1) {
    return 0;
  }
  return (n % 10) + sumDigit(Math.floor(n / 10));
}

console.log(sumDigit(111126));
