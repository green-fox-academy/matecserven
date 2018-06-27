'use strict';

require('dotenv').config();
//const _ = require('lodash');
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

app.get('/books', (req, res) => {
  let sql = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id ORDER BY book_name;';

  let queryInputs = [];

  if (req.query.category || req.query.publisher) {
    if (!req.query.category) {
      sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id AND pub_name = ? ORDER BY book_name;`;
      queryInputs = [req.query.publisher];
    } else if (!req.query.publisher) {
      sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id AND cate_descrip = ? ORDER BY book_name;`;
      queryInputs = [req.query.category];
    } else {
      sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id = book_mast.aut_id AND category.cate_id = book_mast.cate_id AND publisher.pub_id = book_mast.pub_id AND cate_descrip = ? AND pub_name = ? ORDER BY book_name;`;
      queryInputs = [req.query.category, req.query.publisher];
    }
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books: rows
      /*books: _.map(rows, 'book_name'),*/
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});
