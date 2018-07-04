'use strict';

const catButton = document.querySelector('.cats');
const signButton = document.querySelector('.sign');
const form = document.querySelector('form');

form.addEventListener('change', event => {
  if (event.target.name === 'fact') {
    if (event.target.value === 'Yes') {
      catButton.removeAttribute('disabled');
    }
  }
  event.preventDefault();
});

catButton.addEventListener('click', () => {
  alert('Thank you for signing up for cat facts!');
  event.preventDefault();  
})