'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function star(x: number) {
  for (let i: number = 0; i < canvas.width / 2; i += x) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, i);
    ctx.lineTo(canvas.width / 2 - i, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height - i);
    ctx.lineTo(canvas.width / 2 + i, canvas.height / 2);
    ctx.closePath();
    ctx.stroke();
  }
}
star(5);
