'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
const style = document.querySelector('style');
let size = 200;
let posY = 0;
let posX = 0;

nav.addEventListener('click', (event) => {
  if (event.target.getAttribute('data-direction') === 'in') {
    size -= 20;
    img.style.backgroundSize = `${size}%`;
  }

  if (event.target.getAttribute('data-direction') === 'out') {
    size += 20;
    img.style.backgroundSize = `${size}%`;
  }

  if (event.target.getAttribute('data-direction') === 'up') {
    posY -= 10;
    img.style.backgroundPositionY = `${posY}px`;
  }

  if (event.target.getAttribute('data-direction') === 'down') {
    posY += 10;
    img.style.backgroundPositionY = `${posY}px`;
  }

  if (event.target.getAttribute('data-direction') === 'left') {
    posX -= 10;
    img.style.backgroundPositionX = `${posX}px`;
  }

  if (event.target.getAttribute('data-direction') === 'right') {
    posX += 10;
    img.style.backgroundPositionX = `${posX}px`;
  }
});
