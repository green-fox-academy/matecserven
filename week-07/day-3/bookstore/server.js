'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


app.get('/api/books', (req, res) => {
  let sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id';

  let queryInputs = [];

  if (req.query.publisher) {
    sql = sql.concat(' AND publisher.pub_name = ?');
    queryInputs.push(req.query.publisher);
  }
  if (req.query.category) {
    sql = sql.concat(' AND category.cate_descrip = ?');
    queryInputs.push(req.query.category);
  }

  if (req.query.plt) {
    sql = sql.concat(' AND book_price < ?');
    queryInputs.push(req.query.plt);
  }

  if (req.query.pgt) {
    sql = sql.concat(' AND book_price > ?');
    queryInputs.push(req.query.pgt);
  }

  sql = sql.concat(' ORDER BY book_name;');


  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});
