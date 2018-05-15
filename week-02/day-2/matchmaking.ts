'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array1: string[], array2: string[]): string[] {
  let MM: string[] = [];
  let count: number = 0;
  if (girls >= boys) {
    count = boys.length;
  } else {
    count = girls.length ;
  }
  for(let i: number = 0; i < count; i++) {
    MM = MM.concat(array1.shift()).concat(array2.shift());
  }
  return MM;
}

console.log(makingMatches(girls, boys));

export = makingMatches;
