'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
function connectDot(input: number[][]): void {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(input[0][0], input[0][1]);
    for (let i: number = 1; i < input.length; i++) {
      ctx.lineTo(input[i][0], input[i][1]);
    }
  ctx.closePath();
  ctx.stroke();
}
connectDot([[10, 10], [290, 10], [290, 290], [10, 290]]);
connectDot([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
[120, 100], [85, 130], [50, 100]]);

