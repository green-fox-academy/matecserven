'use strict';
export{}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(...numbers: number[]) {
  let sumofsum: number = 0;
  for(let i: number = 0; i < numbers.length; i++) {
    sumofsum = sumofsum + numbers[i];
  }
  console.log(sumofsum);
}

sum(1,2,3,4,5);
sum(12,13);