'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
function drawSteps(step: number, size: number): void {
  ctx.fillStyle = "purple";
  let xy: number = 0;
  for (let i: number = 0; i < step; i++) {
    xy += size;
    ctx.fillRect(xy, xy, size, size);
  }
}
//Can change amount of steps and the size of the squares
drawSteps(15, 20);
