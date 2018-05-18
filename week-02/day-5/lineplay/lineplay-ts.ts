'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(x: number): void {
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

function draw(size: number) {
  for (let i: number = 1; i < canvas.width / size; i++) {
    drawLine(size * i);
  }
}

draw(20);
