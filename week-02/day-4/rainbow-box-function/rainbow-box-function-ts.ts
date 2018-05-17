'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
function drawSquare(x: number, color: string): void {
  ctx.fillStyle = color;
  ctx.fillRect(300 - x / 2, 200 - x / 2, x, x);
}

let rainbow: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let size: number = 400;

for (let i: number = 0; i < 7; i++) {
  drawSquare(size, rainbow[i]);
  size -= 25;
}
