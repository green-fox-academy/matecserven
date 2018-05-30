'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

const days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

class Reservation implements Reservationy {
  getDowBooking(): string {
    return days[Math.floor(Math.random() * days.length)];
  }

  getCodeBooking(): string {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  print(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}

let book = new Reservation();

for (let i: number = 0; i < 20; i++) {
  console.log(book.print());
}
