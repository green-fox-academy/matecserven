'use strict';

const tbody = document.querySelector('tbody');
const reset = document.querySelector('#reset');
const medical = document.querySelector('#medical');

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);

  response.books.forEach((book, index) => {
    const newBook = document.createElement('tr');
    newBook.classList.add(`t${index}`);
    tbody.appendChild(newBook);
    const actualRow = document.querySelector(`.t${index}`);
    
    for (let key in book) {
      const newCol = document.createElement('td');
      newCol.textContent = book[key];
      actualRow.appendChild(newCol);
    }
  })

  reset.addEventListener('click', () => {
    tbody.innerHTML = '';
    http.open('GET', `${host}/api/books`, true);
    http.send();
  });

  medical.addEventListener('click', () => {
    tbody.innerHTML = '';
    http.open('GET', `${host}/api/books?category=Medical`, true);
    http.send();
  });
}

http.open('GET', `${host}/api/books`, true);
http.send();
