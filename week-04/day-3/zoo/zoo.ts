'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected numberOfLegs: number;

  abstract breed(): void;

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getGender(): string {
    return this.gender;
  }
}

class Mammal extends Animal {
  constructor(name: string, gender?: string, age?: number) {
    super();
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.numberOfLegs = 4;
  }

  breed(): string {
    return 'pushing miniature versions out.';
  }
}

export class Bird extends Animal {
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

class Reptile extends Animal {
  constructor(name: string, gender?: string, age?: number) {
    super();
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.numberOfLegs = 4;
  }

  breed(): string {
    return 'laying eggs.';
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());