'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.
function drawSquare(size: number): void {
  let x: number = 0;
  let y: number = 0;
  for (let j: number = 0; j <= 400 / size; j++) {
    x = 0;
    y = j * size;
    if ((j % 2) === 0) {
      for (let i: number = 0; i <= 600; i += size * 2) {
        ctx.fillRect(x, y, size, size);
        x += size * 2;
      }
    } else {
      for (let i: number = 0; i <= 600; i += size * 2) {
        ctx.fillRect(x + size, y, size, size);
        x += size * 2;
      }
    }
  }
}
//if 400 % size === 0 and 600 % size === 0 , the board is scaleable
drawSquare(25);
