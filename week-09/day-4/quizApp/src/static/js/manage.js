'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const manageQ = document.querySelector('.manageQue');

window.onload = () => {
  getQuestions();
}

const getQuestions = () => {
  http.open('GET', `${host}/questions`);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    response.forEach((element) => {
      listQue(element);
    })
  }
  http.send();
}

const listQue = (element) => {
  const questRow = document.createElement('div');
  questRow.className = 'questRow';
  manageQ.appendChild(questRow);
  
  const quest = document.createElement('div');
  quest.textContent = element.question;
  quest.className = 'questionListed';
  questRow.appendChild(quest);

  const button = document.createElement('button');
  button.dataset.id = element.id;
  button.textContent = 'Delete';
  questRow.appendChild(button);
}
