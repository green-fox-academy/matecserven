'use strict';

const pTags = document.querySelectorAll('.apple, .balloon, .cat, .animals');
const pTags2 = document.querySelectorAll('.apple2, .balloon2, .cat2, .animals2');

for (let i = 1; i < pTags.length; i++) {
  pTags[i].textContent = pTags[i].textContent + ' ' + pTags[i - 1].textContent;
}

for (let i = 1; i < pTags2.length; i++) {
  pTags2[i].innerHTML = pTags2[i].innerHTML + ' ' + pTags2[i - 1].innerHTML;
}
