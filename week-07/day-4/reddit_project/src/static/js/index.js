'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const postList = document.querySelector('.postList');

function createPost(element) {
  //make these buttons
  const upvote = document.createElement('img');
  upvote.setAttribute('src', 'static/imgs/upvote.png');
  upvote.classList.add('upvote');
  upvote.dataset.id = element.id;
  const downvote = document.createElement('img');
  downvote.dataset.id = element.id;
  downvote.setAttribute('src', 'static/imgs/downvote.png');
  downvote.classList.add('downvote');

  const post = document.createElement('div');
  post.classList.add('post');
  post.dataset.id = element.id;
  postList.appendChild(post);

  const score = document.createElement('div');
  const scoreValue = document.createElement('p');
  scoreValue.classList.add('scoreValue');
  scoreValue.textContent = element.score;
  score.classList.add('score');
  post.appendChild(score);
  score.appendChild(upvote);
  score.appendChild(scoreValue);
  score.appendChild(downvote);

  const details = document.createElement('div');
  details.classList.add('details');
  post.appendChild(details);

  const cellTop = document.createElement('div');
  const title = document.createElement('h3');
  const url = document.createElement('a');
  cellTop.classList.add('cell');
  cellTop.classList.add('title');
  title.textContent = element.title;
  url.textContent = element.url;
  url.setAttribute('href', `${element.url}`);
  details.appendChild(cellTop);
  cellTop.appendChild(title);
  cellTop.appendChild(url);
  const cellPosted = document.createElement('div');
  const owner = document.createElement('p');
  const date = document.createElement('p');
  cellPosted.classList.add('cell');
  cellPosted.classList.add('posted');
  owner.textContent = 'Posted by ' + element.owner;
  date.textContent = ' at ' + element.timestamp;
  details.appendChild(cellPosted);
  cellPosted.appendChild(owner);
  cellPosted.appendChild(date);

  const cellModify = document.createElement('div');
  const deletePost = document.createElement('button');
  const modifyPost = document.createElement('button');
  cellModify.classList.add('cellAction');
  details.appendChild(cellModify);
  deletePost.classList.add('delete');
  modifyPost.classList.add('modify');
  deletePost.textContent = 'Delete';
  modifyPost.textContent = 'Modify';
  deletePost.dataset.id = element.id;
  modifyPost.dataset.id = element.id;
  cellModify.appendChild(deletePost);
  cellModify.appendChild(modifyPost);
}

http.open('GET', `${host}/api/posts`, true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  response.posts.forEach(element => {
    createPost(element);
  });
}
http.send();

postList.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (event.target.classList.value === 'upvote') {
    http.open('PUT', `${host}/api/posts/${id}/upvote`, true);
    http.setRequestHeader('username', 'user1');
    http.onload = () => {
      const response = JSON.parse(http.responseText);
      const scoreValue = document.querySelector(`.post[data-id="${id}"] .scoreValue`);
      scoreValue.textContent = `${response.rows[0].score}`;
      if (response.vote === 1) {
        event.target.setAttribute('src', 'static/imgs/upvoted.png');
        document.querySelector(`.post[data-id= "${id}"] .downvote`).setAttribute('src', 'static/imgs/downvote.png');
      } else {
        event.target.setAttribute('src', 'static/imgs/upvote.png');
      }
    }
    http.send();
  }
  if (event.target.classList.value === 'downvote') {
    http.open('PUT', `${host}/api/posts/${id}/downvote`, true);
    http.setRequestHeader('username', 'user1');
    http.onload = () => {
      const response = JSON.parse(http.responseText);
      const scoreValue = document.querySelector(`.post[data-id="${id}"] .scoreValue`);
      scoreValue.textContent = `${response.rows[0].score}`;
      if (response.vote === -1) {
        event.target.setAttribute('src', 'static/imgs/downvoted.png');
        document.querySelector(`.post[data-id= "${id}"] .upvote`).setAttribute('src', 'static/imgs/upvote.png');
      } else {
        event.target.setAttribute('src', 'static/imgs/downvote.png');
      }
    }
    http.send();
  }
  if (event.target.classList.value === 'delete') {
    http.open('DELETE', `${host}/api/posts/${id}`, true);
    http.setRequestHeader('username', 'user4');
    http.onload = () => {
      const response = JSON.parse(http.responseText);
      console.log(response);
      if (response.id) {
        postList.removeChild(document.querySelector(`.post[data-id="${id}"]`));
      } else {
        alert('User cant delete post!');
      }
    }
    http.send();
  }
});
