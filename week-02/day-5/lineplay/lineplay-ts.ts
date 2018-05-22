'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function draw(x: number): void {
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(x, 10);
  ctx.lineTo(canvas.width - 10, x);
  ctx.stroke();

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(10, x);
  ctx.lineTo(x, canvas.height - 10);
  ctx.stroke();
}

let y: number = 20; //Set size between lines
for (let i: number = 1; i < canvas.width / y; i++) {
  draw(i * y);
}
