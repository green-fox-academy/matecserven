'use strict';
export{}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

/* //sum of more arguments
function sum(...numbers: number[]) {
  let sumofsum: number = 0;
  for(let i: number = 0; i < numbers.length; i++) {
    sumofsum = sumofsum + numbers[i];
  }
  console.log(sumofsum);
}

sum(1,2,3,4,5);
sum(12,13);
*/

function sum(num: number): number {
  let summa: number = 0;
  for(let i: number = 1; i <= num; i++){
    summa += i;
  }
  return summa;
}

console.log(sum(5));