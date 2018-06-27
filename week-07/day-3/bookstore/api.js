'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('.thead');
const tbody = document.querySelector('tbody');

const http = new XMLHttpRequest();

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

}

http.open('GET', `http://localhost:3000/books`, true);
http.send();
