'use strict';

const h1 = document.querySelector('h1');

document.body.addEventListener('keyup', (event) => {
  h1.textContent = `Last pressed key code is: ${event["key"]}`;
  console.log(event);
});
