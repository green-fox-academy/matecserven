'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
function background(): void{
  ctx.fillRect(0, 0, 600, 400);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function stars(x: number, y: number): void {
  let ThirtyShadesOfGrey: number = 8 * getRandomInt(30);
  ctx.fillStyle = 'rgb(' + ThirtyShadesOfGrey + ',' + ThirtyShadesOfGrey + ',' + ThirtyShadesOfGrey + ')';
  ctx.fillRect(x, y, 25, 25);
}

function drawMeLikeOneOfYourStarryNight(x: number): void {
  background();
  for (let i: number = 0; i < x; i++) {
    stars(getRandomInt(580), getRandomInt(380));
  }
}
drawMeLikeOneOfYourStarryNight(200);
