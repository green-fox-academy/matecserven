'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.json({
    message: 'ok',
  });
});



app.listen(PORT, () => {
  console.log(`The server is up on ${PORT}`);
});
