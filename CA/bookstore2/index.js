'use strict';

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.response);
    console.log(response);
  }
}

xhr.open('GET', '/author', true);
xhr.send();
