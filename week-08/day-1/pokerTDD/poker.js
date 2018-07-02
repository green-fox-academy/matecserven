'use strict';

function poker(p1, p2) {
  let winner = '';
  let highP1 = 0;
  let highP2 = 0;
  let vIndex = 0;
  let color = '';
  let value = [];
  const stock = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  p1.forEach(num => {
    value = num.split('');
    stock.forEach((el, index) => {
      if (value[1] === el) {
        vIndex = index;
      }
    })
    if (vIndex > highP1) {
      highP1 = vIndex;
    }
  });

  p2.forEach(num => {
    value = num.split('');
    stock.forEach((el, index) => {
      if (value[1] === el) {
        vIndex = index;
      }
    })
    if (vIndex > highP2) {
      highP2 = vIndex;
    }
  });

  if (highP1 > highP2) {
    winner = 'p1';
  } else if (highP1 < highP2) {
    winner = 'p2';
  } else {
    winner = 'draw';
  }

  return winner;
}

module.exports = poker;
