import { Component } from '@angular/core';
import { MnemonicaService } from '../services/mnemonica.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  questions: any[];
  currentQuestion = {};
  correct: any[] = [];
  incorrect: any[] = [];

  min: number = 1;
  max: number = 52;

  mode: string = 'numbertocard';

  cardHeaderColor: string = "light";
  isDisabled = false;
  isGameFinished = false;

  constructor(private mnemonicaService: MnemonicaService) {}

  ionViewDidEnter() {
    this.questions = this.mnemonicaService.getShuffledMnemonicaStack();
    console.log(this.questions);

    this.game();
  }

  segmentChanged($event) {
    this.mode = $event.detail.value;
  }

  private game(): void {
    this.isDisabled = false;
    this.cardHeaderColor = "light";
    const newQuestion = this.questions.pop();

    if(!newQuestion) {
      this.isGameFinished = true;
      return;
    }

    this.currentQuestion['answer'] = newQuestion;
    this.currentQuestion['answers'] = this.mnemonicaService.getAnswers(this.currentQuestion['answer']);

    console.log("Current Question: ", this.currentQuestion);
    console.log(`Correct: ${this.correct.length} | incorrect: ${this.incorrect.length}`);
  }

  setRangeFromRangeButtons(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  checkAnswer(answer) {
    this.isDisabled = true;
    let correct = this.currentQuestion['answer'];
    
    if(answer.position === correct.position ||
        answer.value === correct.value ||
        answer.suit === correct.suit ) {
          this.cardHeaderColor = "success";
          this.correct.push(answer);
    } else {
      this.cardHeaderColor = "danger";
      this.incorrect.push(answer);
    }

    setTimeout(()=> this.game(), 500);
  }

  restartGameAfterClosingModel(isNewGame: boolean) {
    this.isGameFinished = !isNewGame;

    this.questions = [];
    this.currentQuestion = {};
    this.correct = [];
    this.incorrect = [];
    this.questions = this.mnemonicaService.getShuffledMnemonicaStack();

    this.game();
  }
}
