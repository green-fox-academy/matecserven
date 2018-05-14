'use strict';
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number): number {
  let fact: number = 1;
  for(let i: number = 1; i <= num; i++) {
    fact *= i;
  }
  return(fact);
}

console.log(factorio(4));
console.log(factorio(7));