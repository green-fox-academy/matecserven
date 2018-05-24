'use strict';

import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */


fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove Obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat Lunch'));
fleet.getThings()[2].complete();
fleet.getThings()[3].complete();

function print(i: number) {
    if (fleet.getThings()[i].getCompleted()) {
      console.log(`${i + 1}. [X] ${fleet.getThings()[i].getName()}`);
    } else {
      console.log(`${i + 1}. [ ] ${fleet.getThings()[i].getName()}`);
    }
}

for (let i: number = 0; i < fleet.getThings().length; i++) {
  print(i);
}
