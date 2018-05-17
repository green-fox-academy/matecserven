'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
ctx.fillStyle = "green";
ctx.fillRect(110, 130, 150, 100);

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 120);

ctx.fillStyle = "blue";
ctx.fillRect(300, 150, 200, 100);

ctx.fillStyle = "yellow";
ctx.fillRect(250, 300, 100, 50);
