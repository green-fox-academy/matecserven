'use strict';

export class Sum {
  sum(numbers: number[]): number {
    let total: number = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);
      return total;
    }
}
