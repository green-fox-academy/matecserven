const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

function listed(list) {
  let listedObj = '';
  list.forEach(element => {
    listedObj += `<li>${element}</li>`;
  });
  return listedObj;
}

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];

  res.render('home', {
    title: 'ToDoS!',
    text: listed(todos),
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});