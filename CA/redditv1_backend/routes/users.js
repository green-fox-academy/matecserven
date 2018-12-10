var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fakereddit',
});

router.get('/', function (req, res, next) {
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

router.post('/newPost', function (req, res, next) {
  console.log(req.body);
  const title = req.body.title;
  const url = req.body.url;
  const username = req.body.user;
  const sql = `INSERT INTO posts (title, url, owner) VALUE ('${title}', '${url}', '${username}')`;

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

module.exports = router;
