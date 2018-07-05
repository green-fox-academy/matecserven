'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const postList = document.querySelector('.postList');

function createPost(element) {
  const post = document.createElement('div');
  post.classList.add('post');
  postList.appendChild(post);

  const score = document.createElement('div');
  score.classList.add('score');
  score.textContent = `${element.score}`;
  post.appendChild(score);
  const details = document.createElement('div');
  details.classList.add('details');
  post.appendChild(details);

  const cellTitle = document.createElement('div');
  cellTitle.classList.add('cell');
  cellTitle.classList.add('title');
  details.appendChild(cellTitle);
  cellTitle.textContent = `${element.title}`;
  const cellUrl = document.createElement('div');
  cellUrl.classList.add('cell');
  cellUrl.classList.add('url');
  details.appendChild(cellUrl); 
  cellUrl.textContent = `${element.url}`;
  const cellOwner = document.createElement('div');
  cellOwner.classList.add('cell');
  cellOwner.classList.add('owner');
  details.appendChild(cellOwner);
  cellOwner.textContent = `${element.owner}`;
  const cellDate = document.createElement('div');
  cellDate.classList.add('cell');
  cellDate.classList.add('date');
  details.appendChild(cellDate);
  cellDate.textContent = `${element.timestamp}`;
}

http.open('GET', `${host}/api/posts`, true);

http.onload = () => {
  const response = JSON.parse(http.responseText);
  response.posts.forEach(element => {
    createPost(element);
  });
}

http.send();
