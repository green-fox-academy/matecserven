'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function drawSteps(step: number, size: number): void {
  ctx.fillStyle = "purple";
  let xy: number = size;
  let size2: number = size;
  for (let i: number = 0; i < step; i++) {
    ctx.fillRect(xy, xy, size2, size2);
    xy += size2;
    size2 += size;
  }
}
//Can change amount of steps and the size of the squares
drawSteps(5, 10);
