// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function countLines(filePath: string): number {
  try {
    return fs.readFileSync(filePath, charEncoding).split('\n').length;
  } catch (error) {
    return 0;
  }
}

console.log(countLines('my-fil.txt'));
console.log(countLines('my-file.txt'));
