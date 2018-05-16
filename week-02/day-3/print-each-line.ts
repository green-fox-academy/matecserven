// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFromFile(filePath: string) {
  try {
    let fileContent = fs.readFileSync(filePath, charEncoding);
    console.log(fileContent);
  } catch (error) {
    console.log(`Unable to read file: ${filePath}`);
  }
}

readFromFile('my-file.txt');
readFromFile('my-fil.txt');
