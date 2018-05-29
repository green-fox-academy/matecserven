'use strict';

import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student): void {
    this.students.push(Student);
  }

  addMentor(Mentor): void {
    this.mentors.push(Mentor);
  }

  info(): void {
    return console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}
