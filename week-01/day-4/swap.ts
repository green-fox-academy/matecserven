'use strict';

export{}

let a: number = 123;
let b: number = 526;

let c: number = 0;
c = b;
b = a;
a = c;

console.log(a);
console.log(b);