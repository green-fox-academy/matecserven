'use strict';

abstract class Instrument {
  protected name: string;

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  abstract sound(): void;

  play() {
    console.log(this.sound());
  }
}

class ElectricGuitar extends StringedInstrument {
  soundMade: string;

  constructor(amount: number = 6) {
    super();
    this.numberOfStrings = amount;
    this.name = 'Electric Guitar';
    this.soundMade = 'Twang';
  }

  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundMade}`;
  }
}

class BassGuitar extends StringedInstrument {
  soundMade: string;

  constructor(amount: number = 4) {
    super();
    this.numberOfStrings = amount;
    this.name = 'Bass Guitar';
    this.soundMade = 'Duum-duum-duum';
  }

  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundMade}`;
  }
}

class Violin extends StringedInstrument {
  soundMade: string;

  constructor(amount: number = 4) {
    super();
    this.numberOfStrings = amount;
    this.name = 'Violin';
    this.soundMade = 'Screech';
  }

  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundMade}`;
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
