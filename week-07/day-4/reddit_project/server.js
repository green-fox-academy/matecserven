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

  let queryInputs = [];
  if (req.query.username) {
    queryInputs.push(req.query.username);
    sql = sql.concat(' WHERE user = ?');
  }

  conn.query(sql, queryInputs, (err, rows) => {
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
  let user = req.param.username;
  let sql = `INSERT INTO posts (title, url, user) VALUE ('${title}', '${url}', '${user}')`;

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

app.put('/api/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE posts SET score = score + 1 WHERE id = ${id}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id}`;

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
})

app.put('/api/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE posts SET score = score - 1 WHERE id = ${id}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id}`;

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

app.delete('/api/posts/:id', (req, res) => {
  let id = req.params.id;
  let deleted = `SELECT * FROM posts WHERE id = ${id}`;
  let sql = `DELETE FROM posts WHERE id = ${id}`;

  conn.query(deleted, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    deleted = rows;

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        deleted,
      });
    });
  });
});

app.put('/api/posts/:id', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let id = req.params.id;
  let sql = `UPDATE posts SET title = '${title}', url = '${url}', timestamp = CURRENT_TIMESTAMP WHERE id = ${id}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${id}`;

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