'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const newPost = document.querySelector('.newPostField');

newPost.addEventListener('submit', event => {
  event.preventDefault();
  const elements = event.target.elements;
  http.open('POST', `${host}/api/posts`, true);
  http.setRequestHeader('Content-Type', 'application/json');
  http.setRequestHeader('username', 'user4');
  http.onload = () => {
    window.location = `${host}`;
  }
  http.send(JSON.stringify({
    title: elements.title.value,
    url: elements.url.value
  }));
});
