'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const question = document.querySelector('.question');
const answersList = document.querySelector('.answers');

window.onload = () => {
  getQuestion();
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