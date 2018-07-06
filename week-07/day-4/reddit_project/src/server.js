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
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/createPost', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/createPost.html'));
});

app.get('/api/posts', (req, res) => {
  let sql = 'SELECT * FROM posts';

  let queryInputs = [];
  if (req.query.username) {
    queryInputs.push(req.query.username);
    sql = sql.concat(' WHERE owner = ?');
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
  const username = req.get('username');

  let sql = `INSERT INTO posts (title, url, owner) VALUE ('${title}', '${url}', '${username}')`;

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
  const id = req.params.id;
  const username = req.headers.username;
  let vote = 0;

  let sql = `SELECT vote FROM user_voted_posts WHERE post_id = ${id} AND username = '${username}'`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    if (rows.length !== 0) {
      vote = rows[0]["vote"];
      if (vote === 1) {
        sql = `UPDATE user_voted_posts SET vote = 0 WHERE username = '${username}' AND post_id = ${id}`;
        
        conn.query(sql, (err) => {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }

          sql = `UPDATE posts SET score = score - 1 WHERE id = ${id}`;
          conn.query(sql, (err) => {
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
                vote: 0,
              });
            });
          });
        });
      } else {

        sql = `UPDATE user_voted_posts SET vote = 1 WHERE username = '${username}' AND post_id = ${id}`;
        
        conn.query(sql, (err) => {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }
          if (vote === -1) {
            sql = `UPDATE posts SET score = score + 2 WHERE id = ${id}`;

            conn.query(sql, (err) => {
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
                  vote: 1,
                });
              });
            });
          } else if (vote === 0) {
            sql = `UPDATE posts SET score = score + 1 WHERE id = ${id}`;
            conn.query(sql, (err) => {
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
                  vote: 1,
                });
              });
            });
          }
        });
      }
    } else {

      let sql2 = `INSERT INTO user_voted_posts (post_id, username, vote) VALUE (${id}, '${username}', 1)`;
      
      conn.query(sql2, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
        sql = `UPDATE posts SET score = score + 1 WHERE id = ${id}`;

        conn.query(sql, (err) => {
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
              vote: 1,
            });
          });
        });
      });
    }
  });
});

app.put('/api/posts/:id/downvote', (req, res) => {
  const id = req.params.id;
  const username = req.get('username');
  let vote = 0;

  let sql = `SELECT vote FROM user_voted_posts WHERE post_id = ${id} AND username = '${username}'`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    if (rows.length !== 0) {
      vote = rows[0]["vote"];
      if (vote === -1) {
        sql = `UPDATE user_voted_posts SET vote = 0 WHERE username = '${username}' AND post_id = ${id}`;
        conn.query(sql, (err) => {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }
          sql = `UPDATE posts SET score = score + 1 WHERE id = ${id}`;
          conn.query(sql, (err) => {
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
                vote: 0,
              });
            });
          });
        });
      } else {
        sql = `UPDATE user_voted_posts SET vote = -1 WHERE username = '${username}' AND post_id = ${id}`;
        conn.query(sql, (err) => {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          }
          if (vote === 1) {
            sql = `UPDATE posts SET score = score - 2 WHERE id = ${id}`;

            conn.query(sql, (err) => {
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
                  vote: -1,
                });
              });
            });
          } else if (vote === 0) {
            sql = `UPDATE posts SET score = score - 1 WHERE id = ${id}`;

            conn.query(sql, (err) => {
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
                  vote: -1,
                });
              });
            });
          }
        });
      }
    } else {

      let sql2 = `INSERT INTO user_voted_posts (post_id, username, vote) VALUE (${id}, '${username}', -1)`;
      conn.query(sql2, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        }
        sql = `UPDATE posts SET score = score - 1 WHERE id = ${id}`;
        conn.query(sql, (err) => {
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
              vote: -1,
            });
          });
        });
      });
    }
  });
});

app.delete('/api/posts/:id', (req, res) => {
  let id = req.params.id;
  const username = req.get('username');
  let deleted;
  let sql = `SELECT * FROM posts WHERE id = ${id}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    if (rows[0]["owner"] === username) {
      deleted = rows;
      sql = `DELETE FROM posts WHERE id = ${id}`;
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
    } else {
      res.json('User is not allowed to delete the post');
    }
  });
});

app.put('/api/posts/:id', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  let id = req.params.id;
  const username = req.get('username');
  let sql = `SELECT owner FROM posts WHERE id = ${id}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    if (rows[0]["owner"] === username) {
      sql = `UPDATE posts SET title = '${title}', url = '${url}', timestamp = CURRENT_TIMESTAMP WHERE id = ${id}`;

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

    } else {
      res.json('User is not allowed to update the post');
    }
  });
});

app.post('/api/user', (req, res) => {
  const username = req.get('username');

  let sql = `INSERT INTO user (username) VALUE ('${username}')`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * FROM user WHERE user_id = ${rows["insertId"]}`;

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