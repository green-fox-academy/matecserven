// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function copy(file1:string, file2: string): boolean {
  try {
    let content: string = fs.readFileSync(file1);
    fs.writeFileSync(file2, content);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(copy('copyfrom.txt', 'copyto.txt'));
console.log(copy('copyfro.txt', 'copyto2.txt')); //false test line
