'use strict';

const genre = document.querySelector('#genre');
const movieSelector = document.querySelector('#movies');
const movies = document.querySelectorAll('.genre');
const selected = document.querySelector('.changeme');


genre.addEventListener('change', (event) => {
  movieSelector.selectedIndex = 0;
  if (event.target.value === 'scifi') {
    movies.forEach(movie => {
      if (movie.className === 'genre scifi') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  } else if (event.target.value === 'drama') {
    movies.forEach(movie => {
      if (movie.className === 'genre drama') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  } else {
    movies.forEach(movie => {
      if (movie.className === 'genre comedy') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  }
});

movieSelector.addEventListener('change', event => {
  selected.textContent = `${event.target.value}`;
});
