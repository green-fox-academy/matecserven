'use strict';

const parsePromised = () => {
  new Promise((resolve, rejected) => {
    try {
      resolve(JSON.parse(process.argv[2]));
    } catch (e) {
      rejected(console.log(e.message));
    }
  })
}

parsePromised();