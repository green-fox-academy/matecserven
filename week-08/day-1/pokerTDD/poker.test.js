'use strict';

const test = require('tape');
const poker = require('./poker');

test('test poker', t => {
  const p1 = ['CT', 'CQ', 'HQ', 'DA', 'C6'];
  const p2 = ['S3', 'HQ', 'SQ', 'D2', 'C5'];

  t.equal(poker(p1, p2), 'drawpair');
  t.end();
});
