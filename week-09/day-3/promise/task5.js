'use strict';

const promise = new Promise((resolve, rejected) => {
  resolve('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');