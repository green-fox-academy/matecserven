'use strict';

const myNameIs = document.querySelector('h1');
const button = document.querySelector('button');

const Eminem = {
  name: 'Slim shady',
  speak: function () {
    myNameIs.textContent += ' ' + this.name;
  }
}

button.addEventListener('click', () => {
  Eminem.speak();
})