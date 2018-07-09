'use strict';

const h1 = document.querySelector('h1');
const button = document.querySelector('button');

function Animal() {
  this.hunger = 5;
  this.thirst = 5;

  this.eat = function() {
    this.hunger--;
  }
  this.drink = function() {
    this.thirst--;
  }
  this.play = function() {
    this.hunger++;
    this.thirst++;
  }
}

function Farm(slots) {
  this.slots = slots;
  this.animals = [];

  this.breed = function() {
    if (this.animals.length < this.slots) {
      let animal = new Animal();
      this.animals.push(animal);
    }
  }
  //sort animals by ascending hunger, and pop the one with the highest hunger
  this.slaugther = function() {
    this.animals.sort((animal1, animal2) => {
      return animal1.hunger - animal2.hunger;
    });
    this.animals.pop();
  }

  this.print = function() {
    if (this.animals.length > 0) {
      if (this.animals.length !== this.slots) {
        return `The farm has ${this.animals.length} living animals. The farm is okay.`;
      } else {
        return `The farm has ${this.animals.length} living animals. The farm is full.`;
      }
    } else {
      return 'The farm is bankrupt';
    }
  }

  this.progress = function() {
    this.animals.forEach(animal => {
      if (Math.random() < 0.5) {
        animal.eat();
      }
      if (Math.random() < 0.5) {
        animal.drink();
      }
      if (Math.random() < 0.5) {
        animal.play();
      }
    });

    //50% chance to breed or slaughter, makes no sense to do both
    if (Math.random() < 0.5) {
      this.slaugther();
    } else {
       this.breed();
    }
    h1.textContent = this.print();
  }

  for (let i = 0; i < this.slots; i++) {
    this.breed();
  }
}

const SheepFarm = new Farm(20);
h1.textContent = SheepFarm.print();

button.addEventListener('click', () => {
  SheepFarm.progress();
});