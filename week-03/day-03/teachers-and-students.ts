'use strict';

export class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  learn() {
    console.log(`${this.name} is learning`);
  }

  question(name: Teacher) {
    name.answer();
  }

}

export class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  answer() {
    console.log(`${this.name} is answering`)
  }

  teach(name: Student) {
    name.learn();
  }
}

let bela = new Student('bela');
let jozsi = new Teacher('jozsi');

jozsi.teach(bela);
bela.question(jozsi);
