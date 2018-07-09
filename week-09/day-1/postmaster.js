'use strict';

function postMaster(poBox, dispatchFunction) {
  return (targetBox, message) => {
    if (poBox === targetBox) {
      return dispatchFunction(message);
    }
  }
}

function myAction(message) {
  console.log('The message says:', message);
}

// Create a private box with a poBox identifier
const myPrivateBox = postMaster('super_secret_box', myAction);

myPrivateBox('super_secret_box', 'The eagle has landed!'); // logs the message
myPrivateBox('false_alarm', 'The eagle has landed! Heeeeloooooo!'); // nothing is logged