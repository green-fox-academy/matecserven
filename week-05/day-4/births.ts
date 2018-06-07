import { cpus } from "os";

'use strict';
export { }

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function copy(file: string): string {
  try {
    let content: string = fs.readFileSync(file, charEncoding);
    return findBirth(content).toString();
  } catch (error) {
    return 'No such file present!';
  }
}

function findBirth(content: string): string[] {
  let yearArray: string[] = [];
  let countYear: Object = {};
  
  yearArray = content.match(/\d{4}/gm);
  yearArray.forEach(value => {
    countYear[value] ? countYear[value]++ 
      : countYear[value] = 1;
  })

  let mostBirth: number = 0;
  for (let i in countYear) {
    if (countYear[i] > mostBirth) {
      mostBirth = countYear[i];
    }
  }

  return Object.keys(countYear).filter(key => countYear[key] === mostBirth);
}

console.log(copy('births.csv'));
