'use strict';

export { }

let lineCount: number = 7;
let linePyr: string = '*';
let lineSpace: string = '';
let lineSpaceCount: number = 1;
let countBot: number = 0;

for (let k: number = 1; k <= lineCount / 2; k++) {
  lineSpaceCount = k;
  while (lineSpaceCount < lineCount / 2) {
    lineSpace += ' ';
    lineSpaceCount++;
  }
  console.log(lineSpace + linePyr);
  linePyr += '**';
  countBot = k;
  lineSpace = '';
}

for (let j: number = countBot + 1; j <= lineCount; j++) {
  linePyr = '*';
  while (countBot + 1 < lineCount) {
    linePyr += '**';
    countBot++;
  }
  console.log(lineSpace + linePyr);
  countBot = j;
  lineSpace += ' ';
}
