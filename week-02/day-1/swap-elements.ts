'use strict';
export{}

// -  Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// -  Swap the first and the third element of `abc`

const abc: string[] = ['Arthur', 'Boe', 'Chloe'];

const cba = abc.shift();

abc.splice(0, 0, abc.pop());
abc.push(cba);

console.log(abc);
