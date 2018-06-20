'use strict';

const list = document.querySelectorAll('li');
const listToBe = ['apple', 'banana', 'cat', 'dog'];
// 1
list.forEach((elem, index) => {
  list[index].textContent = listToBe[index];
});

//2

console.log(list);