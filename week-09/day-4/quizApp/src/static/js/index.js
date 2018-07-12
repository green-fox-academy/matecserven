'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const question = document.querySelector('.question');
const answersList = document.querySelector('.answers');
const scoreSpan = document.querySelector('span');
let score = 0;

window.onload = () => {
  getQuestion();
  addClick();
  setInterval(() => {
    answersList.innerHTML = '';
    getQuestion();
    addClick();
  }, 10000);
}

const getQuestion = () => {
  http.open('GET', `${host}/game`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    question.textContent = response.question;
    response.answers.forEach((element) => {
      listAnswers(element);
    });
    console.log(response);
  }
  http.send();
}

const listAnswers = (element) => {
  const answer = document.createElement('div');
  answer.className = 'answer';
  answer.dataset.correct = element.is_correct;
  answer.textContent = element.answer;
  answersList.appendChild(answer);
}

const addClick = () => {
   answersList.addEventListener('click', (event) => {
    if (event.target.className === 'answer') {
      if (event.target.dataset.correct === '1') {
        event.target.style.background = "green";
        score++;
        scoreSpan.textContent = score;
      } else {
        event.target.style.background = "red";
      }
    }
  });
}