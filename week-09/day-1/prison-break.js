'use strict';

const prison = (name) =>{
  let fugitive = name;
  let visited = 0;
  const visit = () => {
    if (fugitive) {
      visited++;
      console.log(`${fugitive} is visited ${visited} time(s)`);
    } else {
      console.log('Nobody is here anymore');
    }
  }
  const escape = () => {
    console.log(`BREAKING NEWS, ${fugitive} escaped the prison`);
    fugitive = '';
  }

  return { visit, escape };
}

const alcatraz = prison('Sad Panda');

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore