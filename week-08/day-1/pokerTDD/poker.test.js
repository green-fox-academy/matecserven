'use strict';

const test = require('tape');
const poker = require('./poker');

test('test poker', t => {
  const p1 = ['CT', 'CQ', 'D3', 'DA', 'C6'];
  const p2 = ['S3', 'HT', 'SK', 'D6', 'CK'];

  t.equal(poker(p1, p2), 'p1');
  t.end();
});
