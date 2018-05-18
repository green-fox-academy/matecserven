'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function divide(squareA: number): void {
  let sqrsize: number = Math.sqrt(squareA);
  for (let i: number = 1; i <= sqrsize; i++) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / sqrsize * i, 0);
    ctx.lineTo(canvas.width / sqrsize * i, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / sqrsize * i);
    ctx.lineTo(canvas.width, canvas.height / sqrsize * i);
    ctx.stroke();
  }

  draw(canvas.height / sqrsize, sqrsize);
}

function drawLine(x: number, counter: number): void {
  let y: number = 0;
  for (let i: number = 2; i <= counter / 2; i++) {
    y = canvas.width / counter * i;
    //top left
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x, y - (y - 10));
    ctx.lineTo(y / counter * 2 - 10, x);
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(10, x);
    ctx.lineTo(x, y / counter * 2 - 10);
    ctx.stroke();
    //top right
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x + (y / counter * 2), 10);
    ctx.lineTo(y + (y - 10)  , x);
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(y / counter * 2 + 10, x);
    ctx.lineTo(x + y / counter * 2, y / counter * 2- 10);
    ctx.stroke();
    //bot left
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x, y / counter * 2 + 10);
    ctx.lineTo(y / counter * 2 - 10, x + y / counter * 2);
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(10, x + y / counter * 2);
    ctx.lineTo(x, y + (y - 10));
    ctx.stroke();
    //bot right
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(x + y / counter * 2, y / counter * 2 + 10);
    ctx.lineTo(y + (y - 10), x + y / counter * 2);
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(y / counter * 2 + 10, x + y / counter * 2);
    ctx.lineTo(x + y / counter * 2, y + (y - 10));
    ctx.stroke();
  }
}

function draw(x: number, y: number): void {
  let size: number = x / 20;
  for (let i: number = 1; i < x / size; i++) {
    drawLine(size * i, y);
  }
}

//divide(4);
divide(16);
//divide(64);
