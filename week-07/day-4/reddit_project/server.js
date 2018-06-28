'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/posts', (req, res) => {
  let sql = 'SELECT * FROM posts';

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });
});

app.post('/api/posts', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let sql = `INSERT INTO posts (title, url) VALUE ('${title}', '${url}')`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${rows["insertId"]}`;
    
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        rows,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});