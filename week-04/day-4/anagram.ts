'use strict';

export function anagram(word1: string, word2: string): boolean {
    let counter1: Object = {};
    let counter2: Object = {};
    for (let i: number = 0; i < word1.length; i++) {
      let letter = word1[i].toLowerCase();
      if (counter1[letter]) {
        counter1[letter]++;
      } else {
        counter1[letter] = 1;
      }
    }
    for (let i: number = 0; i < word2.length; i++) {
      let letter = word2[i].toLowerCase();
      if (counter2[letter]) {
        counter2[letter]++;
      } else {
        counter2[letter] = 1;
      }
    }
    for (let i in counter1) {
      if (counter1.hasOwnProperty(i)) {
        if (counter1[i] !== counter2[i]) {
          return false;
        }
      }
    }
    for (let i in counter2) {
      if (counter2.hasOwnProperty(i)) {
        if (counter1[i] !== counter2[i]) {
          return false;
        }
      }
    }
    return true;
}
