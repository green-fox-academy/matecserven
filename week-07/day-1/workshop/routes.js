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
})

app.post('/dountil/:what', (req, res) => {
  let message = { };
  let until = req.body.until;
  let what = req.params.what;
  let fin = 1;
  if (until === undefined) {
    message = { error: "Please provide a number!"};
  } else {
    if (what === "sum") {
      for (let i = 1; i < until; i++) {
        fin += i + 1;
      }
      message = { result: `${fin}`};
    }
    if (what === "factor") {
      for (let i = 1; i < until; i++) {
        fin *= i + 1;
      }
      message = { result: `${fin}` };
    }
  }
  res.json(message);
})

module.exports = app;
