'use strict';

function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 150;
  this.use = function () {
    this.inkAmount -= this.width;
  }
}

function Consume(sharpie) {
  console.log(sharpie.inkAmount);
  if (sharpie.inkAmount > 0) {
    sharpie.use();
    Consume(sharpie);
  }
}

let yellow = new Sharpie('yellow', 6);
Consume(yellow);