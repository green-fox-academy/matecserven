'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('doubling endpoint', (t) => {
  request(app)
    .get('/doubling/?input=15')
    .expect('Content-Type', /json/)
    .expect(200, 
      { 
        received: 15,
        result: 30
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('doubling endpoint', (t) => {
  request(app)
    .get('/doubling/')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide an input!"
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter/')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide a name!",
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter/?name=Jani')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide a title!",
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter/?title=student')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide a name!",
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter endpoint', (t) => {
  request(app)
    .get('/greeter/?name=Jani&title=student')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        welcome_message: `Oh, hi there Jani, my dear student!`,
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('appenda endpoint', (t) => {
  request(app)
    .get('/appenda')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('appenda endpoint', (t) => {
  request(app)
    .get('/appenda/kuty')
    .expect('Content-Type', /json/)
    .expect(200,
      {
        appended: "kutya",
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('dountil endpoint', (t) => {
  request(app)
    .post('/dountil/sum')
    .send( { until: 5 } )
    .expect('Content-Type', /json/)
    .expect(200,
      {
        result: 15,
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('dountil endpoint', (t) => {
  request(app)
    .post('/dountil/factor')
    .send({ until: 5 })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        result: 120,
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});