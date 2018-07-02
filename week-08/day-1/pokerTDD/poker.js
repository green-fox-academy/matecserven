'use strict';

function poker(p1, p2) {
  let winner = '';
  let value = [];
  let sortedP1 = [];
  let sortedP2 = [];
  let pairP1 = [];
  let pairP2 = [];
  const stock = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  p1.forEach(num => {
    value = num.split('');
    stock.forEach((el, index) => {
      if (value[1] === el) {
        sortedP1.push(index);
      }
    });
  });

  p2.forEach(num => {
    value = num.split('');
    stock.forEach((el, index) => {
      if (value[1] === el) {
        sortedP2.push(index);
      }
    });
  });

  sortedP1.sort((a, b) => {
    return a - b;
  });
  sortedP2.sort((a, b) => {
    return a - b;
  });

  sortedP1.forEach((el, index) => {
    if (el === sortedP1[index + 1]) {
      pairP1.push(el);
    }
  });

  sortedP2.forEach((el, index) => {
    if (el === sortedP2[index + 1]) {
      pairP2.push(el);
    }
  });


  //pair
  if ((pairP1.length !== 0) && (pairP2.length !== 0)) {
    if (pairP1[0] > pairP2[0]) {
      winner = 'p1';
    } else if (pairP1[0] < pairP2[0]) {
      winner = 'p2';
    } else {
      winner = 'drawpair';
    }
  } else if ((pairP1.length === 0) && (pairP2.length !== 0)) {
    winner = 'p2';
  } else if ((pairP1.length !== 0) && (pairP2.length === 0)) {
    winner = 'p1';
  } else {
    //HC
    if (sortedP1[4] > sortedP2[4]) {
      winner = 'p1';
    } else if (sortedP1[4] < sortedP2[4]) {
      winner = 'p2';
    } else {
      winner = 'drawHC';
    }
  }


  return winner;
}

module.exports = poker;
