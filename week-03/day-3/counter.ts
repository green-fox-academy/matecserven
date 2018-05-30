'use strict';

export class Counter {
  count: number;
  initialValue: number;

  constructor(input: number = 0) {
    this.count = input;
    this.initialValue = input;
  }

  add(addValue: number = 1): void {
    this.count += addValue;
  }

  get(): string {
    return `${this.count}`;
  }

  reset(): void {
    this.count = this.initialValue;
  }
}

let count1 = new Counter();
let count2 = new Counter(5);

count1.add();
count2.add(2);

console.log(count1.get());
console.log(count2.get());
