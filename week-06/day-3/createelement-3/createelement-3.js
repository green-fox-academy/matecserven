'use strict';

const kids = [{ "pet_name": "Wattled crane", "owner": "Bryant" },
{ "pet_name": "Devil, tasmanian", "owner": "Alejandro" },
{ "pet_name": "Mynah, common", "owner": "Nelie" },
{ "pet_name": "Dolphin, common", "owner": "Mariele" },
{ "pet_name": "Gray duiker", "owner": "Maddalena" },
{ "pet_name": "Crab (unidentified)", "owner": "Lucine" },
{ "pet_name": "Ant (unidentified)", "owner": "Lorianna" },
{ "pet_name": "Bison, american", "owner": "Tommie" },
{ "pet_name": "Yellow mongoose", "owner": "Vivyan" },
{ "pet_name": "Carpet snake", "owner": "Veda" },
{ "pet_name": "Lesser mouse lemur", "owner": "Isidor" }];

const pets = document.querySelector('#pets');

kids.forEach(kid => {
  const newArticle = document.createElement('article');
  newArticle.innerHTML = `<h3>${kid.owner}</h3><p>${kid.pet_name}</p>`;
  pets.appendChild(newArticle);
})

