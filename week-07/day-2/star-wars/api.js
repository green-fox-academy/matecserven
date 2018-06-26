'use strict'

let input = document.querySelector('#inputField').value;
const list = document.querySelector('ul');

const http = new XMLHttpRequest();
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
}

const button = document.querySelector('#search');
button.addEventListener('click', () => {
  input = document.querySelector('#inputField').value;
  http.open('GET', `https://swapi.co/api/${input}`, true);
  http.send();
});