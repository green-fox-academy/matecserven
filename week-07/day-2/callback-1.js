'use strict';

const mapWith = (array, callback) => {
  let output = [];
  output = array.map(elem => callback(elem));

  return output;
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let letters = '';
  for (let i = 0; i < word.length; i += 2) {
    letters += word.charAt(i);
  }
  return letters;
}

console.log(mapWith(words, removeSecondLetter));
