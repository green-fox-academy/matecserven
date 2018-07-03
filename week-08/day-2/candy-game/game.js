'use strict';

const createCandy = document.querySelector('.create-candies');
const buyLolly = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');
const candy = document.querySelector('.candies');
const lollies = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

let candies = 0;
let lolly = 0;
let speedy = 0;
let rain = 1000;
let isItRaining = false;

createCandy.addEventListener('click', () => {
  candies++;
  candy.textContent = `${candies}`;
});

buyLolly.addEventListener('click', () => {
  if (candies >= 10) {
    lolly++;
    candies -= 10;
    lollies.textContent += '🍭';
    candy.textContent = `${candies}`;
  }
});
/*
candyRain.addEventListener('click', () => {
  if (!isItRaining) {
    rain *= 10;
    speed.textContent = `${speedy * 10}`;
  } else {
    rain %= 10;
    speed.textContent = `${speedy % 10}`;
  }
})*/

setInterval(() => {
  if (lolly % 2 === 0) {
    speedy = lolly / 2;
    speed.textContent = `${speedy}`;
  }
}, 0);

setInterval(() => {
  candies += speedy;
  candy.textContent = `${candies}`;
}, rain);
