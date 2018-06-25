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
    .send({ until: 5 })
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

test('dountil endpoint', (t) => {
  request(app)
    .post('/dountil/factor')
    .send(undefined)
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide a number!",
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send(undefined)
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide what to do with the numbers!"
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send({ what: "sum" })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide what to do with the numbers!"
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send({ numbers: [1, 2, 3, 4] })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        error: "Please provide what to do with the numbers!"
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send({ "what": "sum", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        result: 18
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send({ "what": "double", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        result: [2, 4, 10, 20]
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Arrays endpoint', (t) => {
  request(app)
    .post('/arrays')
    .send({ "what": "multiply", "numbers": [1, 2, 5, 10] })
    .expect('Content-Type', /json/)
    .expect(200,
      {
        result: 100
      })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
