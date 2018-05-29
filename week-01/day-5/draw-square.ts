'use strict';

export{}

let lineCount: number = 6;
let squareLine: string = '';
let squareMiddle: string = '#';


for (let k: number = 0; k < lineCount; k++) {
  squareLine += '#';
}
console.log(squareLine);

for (let j: number = 2; j < lineCount; j++) {
  squareMiddle += ' ';
}

for (let k: number = 2; k < lineCount; k++) {
  console.log(squareMiddle + '#');
}

console.log(squareLine);
