'use strict';

const picture = document.querySelector('img');
const siteLink = document.querySelector('a');
const badButton = document.querySelector('.this-one');

console.log(picture.getAttribute('src'));
picture.setAttribute('src', 'http://nepszava.hu/picture/109190/normal/436/00436224.jpeg');
siteLink.setAttribute('href', 'https://www.greenfoxacademy.com/');
badButton.setAttribute('disabled', false);
badButton.innerHTML = "Don't click me!";
