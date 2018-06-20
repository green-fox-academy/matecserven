'use strict';

const list = document.querySelectorAll('p');

if (list[3].classList.contains('dolphin')) {
  list[3].textContent = 'pear';
}

if (list[0].classList.contains('apple')) {
  list[2].textContent = 'dog';
}

list[0].classList.add('red');
list[1].classList.remove('balloon');
