'use strict';
export{}

let students: any[] = [
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function candy4(list: any[]): any {
  list.forEach(students => {
    if(students.candies > 4) {
      console.log(`${students.name}: ${students.candies}`);
    }
  });
}
candy4(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyA(list: any[]): number {
  let average: number = 0;
  list.forEach(students => {
    average += students.candies;
  })
  console.log(average /= students.length);
  return average;
}
candyA(students);
