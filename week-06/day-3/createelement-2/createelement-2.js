'use strict';

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

const list = document.querySelector('.asteroids');
list.removeChild(document.querySelector('li'));

planetData.forEach(elem => {
  if (elem.asteroid) {
    const newAsteroid = document.createElement('li');
    newAsteroid.classList.add(elem.category);
    newAsteroid.textContent = elem.content;
    list.appendChild(newAsteroid);
  }
})
