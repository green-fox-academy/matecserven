'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use('/static', express.static('static'));
app.use('/views', express.static('views'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/game', (req, res) => {
  let sql = 'SELECT * FROM questions ORDER BY RAND() LIMIT 1;';

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM questions JOIN answers ON questions.id = answers.question_id  WHERE question_id = ${rows[0].id};`;
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        id: rows[0].question_id,
        question: rows[0].question,
        answers: [{
          id: rows[0].id,
          question_id: rows[0].question_id,
          answer: rows[0].answer,
          is_correct: rows[0].is_correct
        },
        {
          id: rows[1].id,
          question_id: rows[1].question_id,
          answer: rows[1].answer,
          is_correct: rows[1].is_correct
        },
        {
          id: rows[2].id,
          question_id: rows[2].question_id,
          answer: rows[2].answer,
          is_correct: rows[2].is_correct
        },
        {
          id: rows[3].id,
          question_id: rows[3].question_id,
          answer: rows[3].answer,
          is_correct: rows[3].is_correct
        }]
      });
    });
  });
});

app.get('/questions', (req, res) => {
  let sql = 'SELECT * from questions;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json(rows);
  });
});

app.post('/questions', (req, res) => {
  let question = req.body.question;
  let answ1 = req.body.answ1;
  let answ1corr = req.body.answ1corr;
  let answ2 = req.body.answ2;
  let answ2corr = req.body.answ2corr;
  let answ3 = req.body.answ3;
  let answ3corr = req.body.answ3corr;
  let answ4 = req.body.answ4;
  let answ4corr = req.body.answ4corr;
  
  let sqlQuestion = `INSERT INTO questions (question) VALUES ('${question}')`;

  conn.query(sqlQuestion, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    let sqlAnswers = `INSERT INTO answers (question_id, answer, is_correct) VALUES (${rows.insertId}, '${answ1}', ${answ1corr}), (${rows.insertId}, '${answ2}', ${answ2corr}),(${rows.insertId}, '${answ3}', ${answ3corr}),(${rows.insertId}, '${answ4}', ${answ4corr})`
    conn.query(sqlAnswers, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  });
});

module.exports = app;