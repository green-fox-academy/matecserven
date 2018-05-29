'use strict';

import { Aircraft } from './aircraft';

export class Carrier {
  protected HP: number;
  protected aircraftStore: any[];
  protected ammoStore: number;
  protected ammoNeeded: number;

  constructor(value: number, ammo: number) {
    this.HP = value;
    this.ammoStore = ammo;
    this.aircraftStore = [];
    this.ammoNeeded = 0;
  }

  add(model: string): void {
    try {
      if (model === 'F35') {
        this.ammoNeeded += 12;
        this.aircraftStore.push(new Aircraft(model));
      } else if (model === 'F16') {
        this.ammoNeeded += 8;
        this.aircraftStore.push(new Aircraft(model));
      } else {
        throw new Error;
      }
    } catch (error) {
      console.log('Invalid model type!!!');
    }
  }

  fill(): void {
    try {
      if (this.ammoStore > 0) {
        if (this.ammoStore < this.ammoNeeded) {
          this.aircraftStore.forEach(plane => {
            if (plane.isPriority()) {
              if (this.ammoStore >= plane.maxAmmo) {
                this.ammoStore = plane.refill(this.ammoStore);
              }
            }
          });
        } else {
          this.aircraftStore.forEach(plane => {
            this.ammoStore = plane.refill(this.ammoStore);
          });
        }
      } else {
        throw new Error;
      }
    } catch (error) {
      console.log('Not enough Ammo!!');
    }
  }

  fight(enemy: Carrier): void {
    this.aircraftStore.forEach(plane => {
      enemy.HP -= plane.fight();
    });
  }

  getStatus(): void {
    if (this.HP <= 0) {
      console.log(`It's dead Jim :(`);
    } else {
      let total: number = 0;
      this.aircraftStore.forEach(plane => {
        total += plane.currAmmo * plane.baseDamage;
      });
      console.log(`HP: ${this.HP}, Aircraft count: ${this.aircraftStore.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${total}`);
      this.aircraftStore.forEach(plane => {
        console.log(plane.getStatus());
      });
    }
  }
}
