'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookstore'
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/author', (req, res) => {
  const test = 'SELECT * FROM author;';
  conn.query(test, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.json(row);
  });
});

app.get('/addauthor', (req, res) => {
  const test2 = `INSERT INTO author (aut_id, aut_name, country, home_city) VALUES ("AUT22","${req.query.name}", "${req.query.country}", "${req.query.city}");`;

  conn.query(test2, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.json(row);
  });
});

app.post('/addauthor', (req, res) => {
  const test2 = `INSERT INTO author (aut_id, aut_name, country, home_city) VALUES ("AUT25",${req.body.name}, ${req.body.country}, ${req.body.city});`;
  const reqbody = req.body;
  console.log(reqbody);

  conn.query(test2, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.json(row);
  });
});

app.listen(PORT, () => {
  console.log('Iam listening');
});
