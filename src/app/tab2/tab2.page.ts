import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';
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

  constructor(private mnemonicaService: MnemonicaService) {}

  ionViewDidEnter() {
  }

  segmentChanged($event) {
    this.mode = $event.detail.value;
  }

  createNewGame(min: number, max: number) {
    const newGame: Game = {
      questions: this.mnemonicaService.getMenmonicaStackRange(min, max).map(c => ({
        answer: c,
        answers: this.mnemonicaService.getAnswers(c),
      })),
      incorrect: [],
      correct: [],
      isDone: false,
    };

    newGame.currentQuestion = newGame.questions.pop();

    console.log(newGame);
    this.game = newGame;
  }

  isCorrect(answer: Card, userAnswer: Card): boolean {
    return answer.position === userAnswer.position && answer.value === userAnswer.value && answer.suit === userAnswer.suit;
  }
}
