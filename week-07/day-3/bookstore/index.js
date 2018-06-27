'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookstore',
});

app.get('/test', (req, res) => {
  let sql = 'SELECT * from author;';
  let queryInputs = [];

  if (req.query.country) {
    sql = `SELECT * from author WHERE country = ?;`;
    queryInputs = [req.query.country];
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      authors: rows,
    });
  });
});



app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});
