'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  let message = { };
  if (req.query.input) {
    message = {
      received: req.query.input,
      result: req.query.input * 2,
    };
  } else {
    message = {
      error: "Please provide an input!",
    };
  }
  res.json(message);
});

app.get('/greeter', (req, res) => {
  let message = {};
  if (req.query.name && req.query.title) {
    message = {
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    };
  } else if (req.query.name === undefined && req.query.title){
    message = {
      error: "Please provide a name!",
    };
  } else if (req.query.name && req.query.title === undefined) {
    message = {
      error: "Please provide a title!",
    };
  } else if (req.query.name === undefined && req.query.title === undefined) {
    message = {
      error: "Please provide a name!",
    };
  }
  res.json(message);
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    res.json({
      appended: req.params.appendable + 'a',
    });
  }
});

app.get('/appenda/', (req, res) => {
  res.status(404).send('No input provided');
});

app.post('/dountil/:what', (req, res) => {
  let message = { };
  let until = req.body.until;
  let what = req.params.what;
  if (until === undefined) {
    message = { error: "Please provide a number!"};
  } else {
    if (what === "sum") {
      let fin = 0;
      for (let i = 1; i <= until; i++) {
        fin += i;
      }
      message = { result: `${fin}`};
    }
    if (what === "factor") {
      let fin = 1;
      for (let i = 1; i <= until; i++) {
        fin *= i;
      }
      message = { result: `${fin}` };
    }
  }
  res.json(message);
});

app.post('/arrays', (req, res) => {
  let result = { };
  let what = req.body.what;
  let numbers = req.body.numbers;

  if (!what || !numbers) {
    result = { error: "Please provide what to do with the numbers!"};
  } else {
    if (what === "sum") {
      let fin = numbers.reduce((sum, curr) => sum + curr);
      result = { result: fin};
    } else if (what === "multiply") {
      let fin = numbers.reduce((sum, curr) => sum * curr);
      result = { result: fin };
    } else if (what === "double") {
      let fin = numbers.map(num => 
        num * 2);
      result = { result: fin };
    }
  }
  res.json(result);
});

app.post('/sith', (req, res) => {
  let result = {};
  let text = req.body.text;
  let sith_text = [];

  if (!text) {
    result = { error: "Feed me some text you have to, padawan young you are. Hmmm." }
  } else {
    sith_text = text.toLowerCase().split('.');
    sith_text[0] = sith_text[0].trim().split(' ');
    sith_text[1] = sith_text[1].trim().split(' ');

    sith_text[0].forEach((word, index, array) => {
      let swap = '';
      if (index % 2 === 1) {
        swap = array[index - 1];
        array[index - 1] = word;
        array[index] = swap;
      }
    })
    result = sith_text;
  }
  res.json(result);
})

module.exports = app;
