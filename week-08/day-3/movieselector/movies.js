'use strict';

const genre = document.querySelector('#genre');
const movieSelector = document.querySelector('#movies');
const movies = document.querySelectorAll('.movie');
const selected = document.querySelector('.changeme');


genre.addEventListener('change', (event) => {
  if (event.target.value === 'scifi') {
    movies.forEach(movie => {
      if (movie.value === 'scifi') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  } else if (event.target.value === 'drama') {
    movies.forEach(movie => {
      if (movie.value === 'drama') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  } else {
    movies.forEach(movie => {
      if (movie.value === 'comedy') {
        movie.hidden = false;
      } else {
        movie.hidden = true;
      }
    });
  }
});
