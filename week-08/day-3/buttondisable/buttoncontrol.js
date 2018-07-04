'use strict';

const catButton = document.querySelector('.cats');
const signButton = document.querySelector('.sign');
const form = document.querySelector('form');
let catfact;
let animal;

form.addEventListener('change', event => {
  if (event.target.name === 'animal') {
    if (event.target.value === 'Viktor') {
      animal = 'Viktor';
    } else {
      animal = '';
    }
  }
  if (event.target.name === 'fact') {
    if (event.target.value === 'Yes') {
      catfact = true;
    } else {
      catfact = false;
    }
  }

  if (animal === 'Viktor' && catfact === false) {
    signButton.removeAttribute('disabled');
    catButton.setAttribute('disabled', 'true');
    signButton.addEventListener('click', () => {
      alert('Doesnt matter you get catfacts!');
      event.preventDefault();
    });
  } else if (catfact) {
    signButton.removeAttribute('disabled');
    catButton.removeAttribute('disabled');
    signButton.addEventListener('click', () => {
      alert('Thank you for signing up for cat facts!');
      event.preventDefault();  
    });
  } else if (!catfact) {
    catButton.setAttribute('disabled', 'true');
    signButton.setAttribute('disabled', 'true');
  }
  event.preventDefault();
});

catButton.addEventListener('click', () => {
  event.preventDefault();
});