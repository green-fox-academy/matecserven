'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remainingSeconds: number = 0;

remainingSeconds = ((24 - currentHours) * 60 - currentMinutes) * 60 - currentSeconds;

console.log(remainingSeconds);