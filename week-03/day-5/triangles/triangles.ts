'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function draw(x: number, y: number, size: number, i: number) {

  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y);
  ctx.lineTo(x + size / 4, y + (size * Math.sqrt(3)) / 4);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 4 * 3, y + (size * Math.sqrt(3)) / 4);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(x + size / 4, y + (size * Math.sqrt(3)) / 4);
  ctx.lineTo(x + size / 4 * 3, y + (size * Math.sqrt(3)) / 4);
  ctx.lineTo(x + size / 2, y + (size * Math.sqrt(3)) / 2);
  ctx.closePath();
  ctx.stroke();

  if (i > 1) {
    setTimeout(() => { draw(x, y, size / 2, i - 1); }, 600);
    setTimeout(() => { draw(x + size / 2, y, size / 2, i - 1); }, 600);
    setTimeout(() => { draw(x + size / 4, y + (size * Math.sqrt(3)) / 4, size / 2, i - 1); }, 600);
  }
}
draw(0, 30, canvas.width, 6);
