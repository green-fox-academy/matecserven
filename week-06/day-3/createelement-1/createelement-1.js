'use strict';

const list = document.querySelector('ul');
const newListElem = document.createElement('li');
const newListElem2 = document.createElement('li');
const container = document.querySelector('.container');

newListElem.textContent = 'The Green Fox';
newListElem2.textContent = 'The Lamplighter';

list.appendChild(newListElem);
list.appendChild(newListElem2);

container.innerHTML = '<h1>I can add elements to the DOM!</h1>';

const image = document.createElement('img');
image.setAttribute('src', 'http://nepszava.hu/picture/109190/normal/436/00436224.jpeg');
container.appendChild(image);