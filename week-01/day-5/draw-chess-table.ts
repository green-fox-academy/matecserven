'use strict';

export { }

for (let k: number = 1; k <= 8; k++) {
  let row: string = '';
  for (let l: number = 1; l <= 8; l++) {
    if (k % 2 === 0) {
      if (l % 2 === 0) {
        row += ' ';
      } else {
        row += '#';
      }
    } else {
      if (l % 2 === 0) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    }
    console.log(row);
}
