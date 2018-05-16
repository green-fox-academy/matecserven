'use strict';

function divideby10(a: number) {
  try {
    if (a === 0) {
      throw new Error('FAIL');
    } else {
      console.log(a / 10);
    }
  } catch (error) {
    console.log(error.message);
  }
}

divideby10(0);
divideby10(50);
