'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
const style = document.querySelector('style');
let size = 200;
let marginTop = 0;
let marginLeft = 0;

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
    marginTop -= 10;
    img.style.marginTop = `${marginTop}px`;
  }

  if (event.target.getAttribute('data-direction') === 'down') {
    marginTop += 10;
    img.style.marginTop = `${marginTop}px`;
  }

});
