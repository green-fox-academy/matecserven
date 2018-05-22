'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function star(x: number): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, x);
  ctx.lineTo(canvas.width / 2 - x, canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height - x);
  ctx.lineTo(canvas.width / 2 + x, canvas.height / 2);
  ctx.closePath();
  ctx.stroke();
}

let y: number = 10; // Set size between lines
for (let i: number = 0; i < canvas.width / 2; i += y) {
  star(i);
}
