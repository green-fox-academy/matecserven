'use strict';

let car = {
  petrolLevel: 0,
  petrolCapacity: 50,
  refill: function (amount) {
    let usedPetrol = amount - (this.petrolCapacity - this.petrolLevel);
    this.petrolLevel += usedPetrol;
    return usedPetrol;
  }
}

let station = {
  petrolStorage: 3000,
  provide: function (car) {
    this.petrolStorage -= car.refill(this.petrolStorage);
  }
}

console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);