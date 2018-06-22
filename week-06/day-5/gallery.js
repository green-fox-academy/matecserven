'use strict';

const rightArrow = document.querySelector('aside.right');
const leftArrow = document.querySelector('aside.left');
const pic = document.querySelector('.pic');
const picName = document.querySelector('h2');
const picDesc = document.querySelector('p');
const thumbnail = document.querySelector('.thumbnail');

let picPos = 0;

const images = [
  { name: 'Labrador', desc: 'Picture of a labrador', src: 'dog-muzzle-relaxed.jpg'},
  { name: 'Husky', desc: 'Picture of a husky', src: 'husky-dog-white.jpg'},
]

pic.setAttribute('src', '/images/'.concat(images[picPos].src));
picName.textContent = images[picPos].name;
picDesc.textContent = images[picPos].desc;

images.forEach((dog, index) => {
  const newPic = document.createElement('img');
  newPic.setAttribute('src', '/images/'.concat(dog.src));
  newPic.classList.add('thumbs');
  newPic.onclick = () => {
    document.querySelector('.pic').setAttribute('src', '/images/'.concat(dog.src));
    picPos = index;
  }
  newPic.onmouseover = () => {

  }
  thumbnail.appendChild(newPic);
})

rightArrow.onclick = () => {
  picPos++;
  if (picPos >= images.length) {
    picPos = 0;
  }
  pic.setAttribute('src', '/images/'.concat(images[picPos].src));
  picName.textContent = images[picPos].name;
  picDesc.textContent = images[picPos].desc;

};

leftArrow.onclick = () => {
  picPos--;
  if (picPos < 0) {
    picPos = images.length - 1;
  }
  pic.setAttribute('src', '/images/'.concat(images[picPos].src));
  picName.textContent = images[picPos].name;
  picDesc.textContent = images[picPos].desc;
};
