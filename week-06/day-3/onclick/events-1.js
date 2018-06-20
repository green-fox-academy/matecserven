'use strict';

const button = document.querySelector('button');
const body = document.querySelector('body');

button.onclick = () => {
  if (body.classList.contains('party')) {
    body.classList.remove('party');
  } else {
    body.classList.add('party');
  }
};