'use strict';

const Shuffler = {
  cash: 10000,
  cycle: 0,
  pick: function () {
    this.cash -= 1000;
    if (this.cycle === 0) {
      Panama.cash += 1000;
      this.cycle++;
    } else {
      Cyprus.cash += 1000;
      this.cycle = 0;
    }
  }
};

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function (amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function (amt) {
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 