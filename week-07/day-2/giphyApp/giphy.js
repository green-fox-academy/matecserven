'use strict';

const gif = document.querySelector('#gif');
const img = document.createElement('iframe');
const thumbnail = document.querySelector('footer');
let data;

let xhr = new XMLHttpRequest(),
  method = "GET",
  url = "http://api.giphy.com/v1/gifs/trending?api_key=Ox0yfu3CWqI5ymu76Nx3tnCyOFUxu4ex&limit=16";


xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    console.log(data);
    img.setAttribute('src', data.data[0].images.original.url);
    gif.appendChild(img);

    data.data.forEach((data, index) => {
      const newPic = document.createElement('img');
      newPic.setAttribute('src', data.images.original.url);
      newPic.classList.add('thumbs');
      newPic.onclick = () => {
        document.querySelector('iframe').setAttribute('src', data.images.original.url);
      }
      thumbnail.appendChild(newPic);
    });
  }
};
xhr.send();
