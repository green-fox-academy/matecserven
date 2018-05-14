'use strict';
export{}

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let row: any[][] = [];
function matrix(x: number): void {
  for(let i: number = 0; i < x; i++) {
    row[i] = [];
    for(let j: number = 0; j < x; j++) {
      if (j == x - i - 1) {
        row[i].push(1);
      } else {
        row[i].push(0);
      } 
    }
  }
  console.log(row);
}
matrix(5);