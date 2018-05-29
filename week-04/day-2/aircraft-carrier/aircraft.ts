'use strict';

export class Aircraft {
  protected model: string;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected currAmmo: number;

  constructor(name: string) {
    this.model = name;
    this.currAmmo = 0;
    if (name === 'F16') {
      this.maxAmmo = 8;
      this.baseDamage = 30;
    } else {
      this.maxAmmo = 12;
      this.baseDamage = 50;
    }
  }

  protected fight(): number {
    let temp: number = this.currAmmo;
    this.currAmmo = 0;
    return this.baseDamage * temp;
  }

  protected refill(value: number): number {
    this.currAmmo = this.maxAmmo;
    return value - this.maxAmmo;
  }

  protected getType(): string {
    return this.model;
  }

  protected getStatus(): string {
    return `Type ${this.model}, Ammo: ${this.currAmmo}, Base Damage: ${this.baseDamage}, ALL Damage: ${this.currAmmo * this.baseDamage}`;
  }

  protected isPriority(): boolean {
    if (this.model === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}
