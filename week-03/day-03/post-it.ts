'use strict';

export class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgColor: string, text: string, textColor: string) {
    this.backgroundColor = bgColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let example1 = new PostIt('orange', 'blue', 'Idea 1');
let example2 = new PostIt('pink', 'black', 'Awesome');
let example3 = new PostIt('yellow', 'green', 'Superb!');

console.log(example1);
console.log(example2);
console.log(example3);
