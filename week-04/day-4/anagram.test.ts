'use strict';

import { anagram } from './anagram';
import * as test from 'tape';

test('are they anagrams', t => {
  let checkThem: boolean = anagram('alma', 'lama');
  t.equal(checkThem, true);
  t.end();
});

test('are they anagrams', t => {
  let checkThem: boolean = anagram('Alma', 'Lama');
  t.equal(checkThem, true);
  t.end();
});

test('are they anagrams', t => {
  let checkThem: boolean = anagram('alma', 'laMaaa');
  t.equal(checkThem, false);
  t.end();
});

test('are they anagrams', t => {
  let checkThem: boolean = anagram('4', 'lama');
  t.equal(checkThem, false);
  t.end();
});
