'use strict'

let input = document.querySelector('#inputField').value;
const list = document.querySelector('ul');

const http = new XMLHttpRequest();
http.open('GET', `https://swapi.co/api/people/`, true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  
  response.results.some(data => {
    if (data.name === input) {
      return console.log('good');
    } else {
      console.log('lel');
    }
  });
}

const button = document.querySelector('#search');
button.addEventListener('click', () => {
  input = document.querySelector('#inputField').value;
  http.send();
});