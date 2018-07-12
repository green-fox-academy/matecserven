'use strict';

const test = require('tape');
const request = require('supertest');
const quiz = require('./routes');

test('GET /game', (t) => {
  request(quiz)
    .get('/game')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

