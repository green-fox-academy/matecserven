'use strict';

const attachTitle = (who) => {
  return `DR. ${who}`;
}

const promise = Promise.resolve('MANHATTAN');

promise
  .then(attachTitle)
  .then(console.log);
