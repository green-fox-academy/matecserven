// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function writeSingle(filePath: string): string {
  try {
    fs.readFileSync(filePath, charEncoding);
    fs.writeFileSync(filePath, 'Mate');
    return ('Success');
  } catch (error) {
    return (`Unable to write file: ${filePath}`);
  }
}
console.log(writeSingle('my-file2.txt'));
console.log(writeSingle('my-fil.txt'));
