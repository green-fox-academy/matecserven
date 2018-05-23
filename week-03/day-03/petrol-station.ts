'use strict';

export class Station {
  gasAmount: number;

  constructor(input: number) {
    this.gasAmount = input;
  }

  refill(car: Car) {
    this.gasAmount -= (car.capacity - car.gasAmount);
    car.gasAmount = 100;
  }
}

export class Car {
  gasAmount: number;
  capacity: number;

  constructor(gas: number = 0, capacity: number = 100) {
    this.gasAmount = gas;
    this.capacity = capacity;
  }
}

let car1 = new Car();
let station = new Station(500);

station.refill(car1);

console.log(car1.gasAmount);
console.log(station.gasAmount);
