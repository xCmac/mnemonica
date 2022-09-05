import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  random: string = '';

  constructor() {}

  ionViewWillEnter() {
    this.getRandomCardAndPosition();
  }

  getRandomCardAndPosition() {

    const values: string[] = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
    const suits = ['Clubs', 'Hearts', 'Spades', 'Diamonds'];

    const value: string = values[Math.floor(Math.random()*values.length)];
    const suit: string = suits[Math.floor(Math.random()*suits.length)];
    const position: number =  Math.floor(Math.random() * (52 - 1 + 1) + 1)

    this.random = `The ${value} of ${suit} @ ${position}`;
  }
}
