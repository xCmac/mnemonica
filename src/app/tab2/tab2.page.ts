import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  questions: any[];
  currentQuestion: any[];
  correct: number = 0;
  wrong: number = 0;

  min: number = 1;
  max: number = 52;

  constructor(private mnemonicaService: MnemonicaService) {}

  ionViewDidEnter() {
    console.log(this.questions);
    this.questions = this.mnemonicaService.getShuffled();
    console.log(this.questions);

    this.game();
  }

  private game(): void {
    this.currentQuestion = [];
    this.currentQuestion.push(this.questions.pop());
    this.currentQuestion.push(...this.mnemonicaService.getWrongAnswers(this.currentQuestion[0]));

    console.log(this.currentQuestion);
  }

  private checkAnswer() {

  }

  setRangeFromRangeButtons(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
}
