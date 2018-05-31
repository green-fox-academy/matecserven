'use strict';

import { Sum } from './sum';
import * as test from 'tape';

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [1, 2, 3, 4, 5];

  t.equal(sum.sum(numbers), 15);
  t.end();
})
