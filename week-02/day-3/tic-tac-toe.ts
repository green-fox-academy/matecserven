// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function ticTacResult(filePath: string): string {
  try {
    let array: string[];
    let matrix: string[][] = [];
    array = fs.readFileSync(filePath, charEncoding).split('\n');
    for (let i: number = 0; i < 3; i++) {
      matrix[i] = array[i].split('');
    }
    if (matrix[0][0] === matrix[0][1] && matrix[0][2] === matrix[0][0]) {
      return matrix[0][0];
    } else if
    (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[0][0]) {
      return matrix[0][0];
    } else if
    (matrix[0][0] === matrix[1][0] && matrix[2][0] === matrix[0][0]) {
      return matrix[0][0];
    } else if
    (matrix[1][0] === matrix[1][1] && matrix[1][2] === matrix[1][0]) {
      return matrix[1][0];
    } else if
    (matrix[2][0] === matrix[2][1] && matrix[2][2] === matrix[2][0]) {
      return matrix[2][0];
    } else if
    (matrix[0][1] === matrix[1][1] && matrix[2][1] === matrix[0][1]) {
      return matrix[0][1];
    } else if
    (matrix[0][2] === matrix[1][2] && matrix[2][2] === matrix[0][2]) {
      return matrix[0][2];
    } else if
    (matrix[0][2] === matrix[1][1] && matrix[2][0] === matrix[0][2]) {
      return matrix[0][2];
    } else {
      return 'Draw';
    }
  } catch (error) {
    return ('404');
  }
}

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw
