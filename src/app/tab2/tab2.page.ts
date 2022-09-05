import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';
import { Game } from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  mode: string = 'numbertocard';
  game: Game;

  cardHeaderColor: string = 'light';
  isCardDisabled: boolean = false;

  lastMin: number;
  lastMax: number;
  title: string;

  constructor(private mnemonicaService: MnemonicaService) {}

  ionViewDidEnter() {
  }

  segmentChanged($event) {
    this.mode = $event.detail.value;
  }

  createNewGame(min: number, max: number) {
    this.lastMin = min;
    this.lastMax = max;
    const newGame: Game = new Game();
    
    const questions = this.mnemonicaService.getMenmonicaStackRange(min, max).map(c => ({
        answer: c,
        answers: this.mnemonicaService.getAnswers(c),
    }));

    newGame.questions = questions;
    this.game = newGame;

    console.log(this.game);
    this.game.nextQuestion();
  }

  reset() {
    this.createNewGame(this.lastMin, this.lastMax);
  }

}
