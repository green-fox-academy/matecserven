'use strict';

const all = (promise1, promise2) => {
  return new Promise((resolve, rejected) => {
    let counter = 0;
    let arrayOut = [];
    promise1.then((data) => {
      arrayOut[0] = data;
      counter++
      if (counter >= 2) {
        resolve(arrayOut);
      }
    });
    promise2.then((data) => {
      arrayOut[1] = data;
      counter++
      if (counter >= 2) {
        resolve(arrayOut);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);