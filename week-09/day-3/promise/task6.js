'use strict';

first()
  .then(function (result) {
    return second(result);
  })
  .then(function (result) {
    console.log(result);
    return result;
  })
  ;

//proper solution reminder
// first().then(second).then(console.log);
