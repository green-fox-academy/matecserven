'use strict';

import { Printable } from './printable';
import { Comparable } from './comparator';

class Domino implements Printable, Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  printAllFields(): number[] {
    return this.values;
  }

  compareTo(domino: Domino): number {
    if (this.values[1] > domino.values[0]) {
      return 1;
    } else if (this.values[1] === domino.values[0]) {
      return 0;
    } else {
      return -1;
    }
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

dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
});

for (let domino of dominoes) {
  console.log(domino.printAllFields());
}
