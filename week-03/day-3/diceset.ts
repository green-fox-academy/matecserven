'use strict';

class DiceSet {
  // You have a `DiceSet` class which has a list for 6 dices
  // You can roll all of them with roll()
  // Check the current rolled numbers with getCurrent()
  // You can reroll with reroll()
  // Your task is to roll the dices until all of the dices are 6
  dices: number[];
  readonly numOfDices: number = 6;

  summa: number;

  roll(): number[] {
    this.dices = [];
    for (var i = 0; i < this.numOfDices; i++) {
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }
  }

  sumOfDices(dices: number[]) {
    this.summa = this.dices.reduce(function(a, b): number {
      return a + b;
    });
  }
}

let diceSet = new DiceSet();
diceSet.roll();
diceSet.sumOfDices(diceSet.dices);

while (diceSet.summa !== 36) {
  diceSet.dices.forEach(value => {
    if (value !== 6) {
      diceSet.reroll(diceSet.dices.indexOf(value));
    }
  })
  diceSet.sumOfDices(diceSet.dices);
}

console.log(diceSet.summa);
diceSet.getCurrent();
