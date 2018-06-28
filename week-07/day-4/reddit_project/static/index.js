'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  
}

http.open('GET', `${host}/hello`, true);
http.send();
