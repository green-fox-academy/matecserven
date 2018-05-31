'use strict';

import { Sum } from './sum';
import * as test from 'tape';

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [1, 2, 3, 4, 5];

  t.equal(sum.sum(numbers), 15);
  t.end();
});

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [];

  t.equal(sum.sum(numbers), 'Not a number');
  t.end();
});

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [1];

  t.equal(sum.sum(numbers), 1);
  t.end();
});

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [1, 2, 3, 4, 5, 5, 5];

  t.equal(sum.sum(numbers), 25);
  t.end();
});

test('is it equal', t => {
  let sum = new Sum();
  const numbers: number[] = [null];

  t.equal(sum.sum(numbers), 'Not a number');
  t.end();
});

test('is it equal', t => {
  let sum = new Sum();
  const string: string[] = ['alma'];

  t.equal(sum.sum(string), 'Not a number');
  t.end();
});
