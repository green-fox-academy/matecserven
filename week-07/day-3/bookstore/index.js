'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
