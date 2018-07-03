'use strict';

const button = document.querySelector('button');
const h1 = document.querySelector('h1');
let counter = 0;

button.addEventListener('click', () => {
  counter++;
});

setTimeout(() => {
  if (counter === 3) {
    h1.textContent = '5 seconds elapsed and clicked 3 times';
  }
}, 5000);
