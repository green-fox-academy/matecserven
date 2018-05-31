'use strict';

import { Apple } from './apples';
import * as test from 'tape';

test('is it apple', t => {
  let actual = new Apple();

  t.equal(actual.getApple(), 'apple');
  t.end();
});
