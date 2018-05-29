'use strict';

import { Person } from './person';

export class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  protected introduce(): void {
    return console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  protected getGoal(): void {
    return console.log('My goal is: Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents++;
  }
}
