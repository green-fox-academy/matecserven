'use strict';

export{}

let lineCount: number = 4;
let lineTriangle: string = '*';

for (let k: number = 1; k <= lineCount; k++) {
  console.log(lineTriangle);
  lineTriangle += '*';
}
