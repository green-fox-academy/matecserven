'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

export function median(pool: number[]): number {
  pool.sort(function (a, b) {
    return a - b;
  });

  let half = Math.floor(pool.length / 2);
  
  if (pool.length % 2)
    return pool[half];
  else
    return (pool[half - 1] + pool[half]) / 2.0;
}

export function isVowel(c: string): boolean {
  return ['a', 'u', 'o', 'e', 'i', 'A', 'U', 'O', 'E', 'I'].some(letter =>
    letter === c);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}
