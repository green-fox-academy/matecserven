'use strict';
export { }

function countDown(n: number): number {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return countDown(n - 1);
}

countDown(5);
