'use strict';

export{}

let lineCount: number = 6;
let squareLine: string = '';
let squareMiddle1: string = '';
let squareMiddle2: string = '';
let j: number = 0;
let l: number = 0;


for (let k: number = 0; k < lineCount; k++) {
    squareLine += '#';
}
console.log(squareLine);
/*
for (let j: number = 2; j < lineCount; j++) {
    squareMiddle += ' ';
}
*/
for (let k: number = 2; k < lineCount; k++) {
    squareMiddle1 = '';
    squareMiddle2 = '';
    j = k + 2;
    l = k - 1;
    
    while (j > lineCount - 2) {
        squareMiddle1 += ' ';
        j--;
    }

    while (l < lineCount - 2) {
        squareMiddle2 += ' ';
        l++;
    }

    console.log('#' + squareMiddle1 + '#' + squareMiddle2 + '#');
}

console.log(squareLine);