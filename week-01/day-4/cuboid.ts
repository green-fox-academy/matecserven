'use strict';

let aSide: number = 2.34;
let bSide: number = 3.45;
let cSide: number = 1.87;

let surface: number = 2 * (aSide * bSide + bSide * cSide + bSide * cSide);
let volume: number = aSide * bSide * cSide;

console.log('Surface Area: ' + surface);
console.log('Volume: ' + volume);