'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(input: any[]): string[] {
  let out: string[] = [];
  input.forEach(value => {
    if(value === 2) {
      value = 'Croissant';
      out.push(value);
    } else if(!value) {
      value = 'Ice cream';
      out.push(value);
    } else {
      out.push(value);
    }
  });
  return out;
}
console.log(sweets(shopItems));

export = sweets;
