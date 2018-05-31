'use strict';

export class Sum {
  sum(numbers: any[]): any {
    if (typeof numbers[0] === 'number') {
      let total: number = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0);
      return total;
    } else {
      return 'Not a number';
    }
  }
}
