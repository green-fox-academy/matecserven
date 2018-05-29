'use strict';

import { Person } from './person';

export class Student extends Person{
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  protected introduce(): void {
    return console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  protected getGoal(): void {
    return console.log(`My goal is: Be a junior software developer.`);
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}
