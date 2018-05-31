'use strict';

import { fibonacci } from './fibonacci';
import * as test from 'tape';

test('Is it correct', t => {
  t.equal(fibonacci(5), 8);
  t.end();
});
