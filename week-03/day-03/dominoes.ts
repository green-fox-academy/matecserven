'use strict';

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  let sorted: number[][] = [];
  let j: number = 0;

  dominoes.forEach(function (value) {
    sorted.push(value.values);
  });

  for (let k: number = 1; k < sorted.length; k++) {
    for (let i: number = 0; i < sorted.length - k; i++) {
      if (sorted[0][0] === sorted[i + k][1]) {
        sorted.unshift(sorted[i + k]);
        sorted.splice(i + k + 1, 1);
      }
    }
  }
  console.log(sorted);
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);