'use strict';

import { Aircraft } from './aircraft';
import { Carrier } from './carrier';

let alpha = new Carrier(5000, 100);
let omega = new Carrier(4000, 80);

console.log('-------Alpha filled--------');
alpha.add('F35');
alpha.add('F35');
alpha.add('F16');
alpha.add('F35');
alpha.add('F35');
alpha.add('F16');
alpha.fill();
alpha.getStatus();
console.log('-------Omega filled------');
omega.add('F35');
omega.add('F35');
omega.add('F16');
omega.add('F35');
omega.add('F35');
omega.add('F16');
omega.fill();
omega.getStatus();
alpha.fight(omega);
omega.fight(alpha);
console.log('-------First fight-------');
alpha.getStatus();
console.log('---------------------');
omega.getStatus();
alpha.fill();
omega.fill();
alpha.fight(omega);
omega.fight(alpha);
console.log('-------Second fight------');
alpha.getStatus();
console.log('---------------------');
omega.getStatus();
