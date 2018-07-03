'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
const style = document.querySelector('style');
let size = 200;

nav.addEventListener('click', (event) => {
  if (event.target.getAttribute('data-direction') === 'in') {
    size -= 20;
    img.style.backgroundSize = `${size}%`;
  }

  if (event.target.getAttribute('data-direction') === 'out') {
    size += 20;
    img.style.backgroundSize = `${size}%`;
  }
});
