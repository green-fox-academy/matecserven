'use strict';

const button = document.querySelector('button');
const page = document.querySelector('p');
const list = document.querySelectorAll('li');

button.addEventListener('click', () => {
  page.textContent = `${list.length}`;
});