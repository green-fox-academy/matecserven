'use strict';

const button = document.querySelector('button');
// First solution
button.addEventListener('click', (event) => {
  console.log(event["timeStamp"]);
  button.setAttribute('disabled', true);
});
