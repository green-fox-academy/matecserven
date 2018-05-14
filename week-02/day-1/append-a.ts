'use strict';
export{}

// -  Create an array variable named `animals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let animals = ["kuty", "macsk", "cic"];

animals = animals.map((x) => {
  x = x + 'a';
  return x;
})

console.log(animals);