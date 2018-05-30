'use strict';

import { Animal,Bird } from './zoo/zoo';

interface Flyable {
  land: boolean,
  fly: boolean,
  takeOff: boolean,
}

abstract class Vehicle {
  wheels: number;
  gasType: string;
  windows: number;
}

class Helicopter extends Vehicle implements Flyable {
  land = true;
  fly = true;
  takeOff = true;

  constructor(wheels: number, gasType: string, windows: number) {
    super();
    this.wheels = wheels;
    this.gasType = gasType;
    this.windows = windows;
  }
}

class Bird extends Animal implements Flyable {
  land = true;
  fly = true;
  takeOff = true;
  constructor(name: string, gender?: string, age?: number) {
    super();
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.numberOfLegs = 2;
  }

  breed(): string {
    return 'laying eggs.';
  }
}