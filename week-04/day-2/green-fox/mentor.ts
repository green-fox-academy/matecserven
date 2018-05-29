'use strict';

import { Person } from './person';

export class Mentor extends Person {
  protected level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  protected introduce(): void {
    return console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  protected getGoal(): void {
    return console.log(`My goal is: Educate brilliant junior software developers.`);
  }
}
