'use strict';

import { Printable } from './printable';

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): number[] {
    return this.values;
  }
}

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

let dominoes = initializeDominoes();

for (let domino of dominoes) {
  console.log(domino.printAllFields());
}
