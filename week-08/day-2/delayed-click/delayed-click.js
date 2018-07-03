'use strict';

const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
  setTimeout(() => {
    h1.textContent = '2 seconds ellapsed';
  }, 2000);
});
