'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 400, 400);

function draw(x: number, y: number, size: number, i: number): void {
  ctx.strokeRect(x, y + size / 3, size, size / 3); //base horizont
  ctx.strokeRect(x + size / 3, y, size / 3, size); //base vertical

  if (i > 1) {
    draw(x, y + size / 3, size / 3, i - 1); //left
    draw(x + size / 3, y, size / 3, i - 1); //top
    draw(x + size * 2 / 3, y + size / 3, size / 3, i - 1); //right
    draw(x + size / 3, y + size * 2 / 3, size / 3, i - 1); //bot
  }
}

draw(0, 0, 400, 5);
